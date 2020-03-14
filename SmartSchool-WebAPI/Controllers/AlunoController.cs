using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IRepository _repo;

        public AlunoController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.GetAllAlunosAsync(true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetByAlunoId(int AlunoId)
        {
            try
            {
                var result = await _repo.GetAlunoAsyncById(AlunoId, true);
                
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("ByDisciplina/{disciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int disciplinaId)
        {
            try
            {
                var result = await _repo.GetAlunosAsyncByDisciplinaId(disciplinaId, false);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> post(Aluno model)
        {
            try
            {
                _repo.Add(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }                
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{alunoId}")]
        public async Task<IActionResult> put(int alunoId, Aluno model)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound();

                _repo.Update(model);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }                
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{alunoId}")]
        public async Task<IActionResult> delete(int alunoId)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if(aluno == null) return NotFound();

                _repo.Delete(aluno);

                if(await _repo.SaveChangesAsync())
                {
                    return Ok("Deletado");
                }                
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

    }
}