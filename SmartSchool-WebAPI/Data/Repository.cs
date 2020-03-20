using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Aluno[]> GetAllAlunosAsync(bool includeDisciplina = false)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(pe => pe.AlunosDisciplinas)
                             .ThenInclude(ad => ad.Disciplina)
                             .ThenInclude(d => d.Professor);
            }

            query = query.AsNoTracking()
                         .OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeDisciplina)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(a => a.AlunosDisciplinas)
                             .ThenInclude(ad => ad.Disciplina)
                             .ThenInclude(d => d.Professor);
            }

            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.Id == alunoId);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina)
        {
            IQueryable<Aluno> query = _context.Alunos;

            if (includeDisciplina)
            {
                query = query.Include(p => p.AlunosDisciplinas)
                             .ThenInclude(ad => ad.Disciplina)                             
                             .ThenInclude(d => d.Professor);
            }

            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.AlunosDisciplinas.Any(ad => ad.DisciplinaId == disciplinaId));

            return await query.ToArrayAsync();
        }

        public async Task<Professor[]> GetProfessoresAsyncByAlunoId(int alunoId, bool includeDisciplina)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplina)
            {
                query = query.Include(p => p.Disciplinas);
            }

            query = query.AsNoTracking()
                         .OrderBy(aluno => aluno.Id)
                         .Where(aluno => aluno.Disciplinas.Any(d => 
                            d.AlunosDisciplinas.Any(ad => ad.AlunoId == alunoId)));

            return await query.ToArrayAsync();
        }

        public async Task<Professor[]> GetAllProfessoresAsync(bool includeDisciplinas = true)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplinas)
            {
                query = query.Include(c => c.Disciplinas);
            }

            query = query.AsNoTracking()
                         .OrderBy(professor => professor.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Professor> GetProfessorAsyncById(int professorId, bool includeDisciplinas = true)
        {
            IQueryable<Professor> query = _context.Professores;

            if (includeDisciplinas)
            {
                query = query.Include(pe => pe.Disciplinas);
            }

            query = query.AsNoTracking()
                         .OrderBy(professor => professor.Id)
                         .Where(professor => professor.Id == professorId);

            return await query.FirstOrDefaultAsync();
        }
    }
}