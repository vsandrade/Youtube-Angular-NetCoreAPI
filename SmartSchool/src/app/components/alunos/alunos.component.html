<div class="row">

  <div class="col-sm-6" *ngIf="alunoSelecionado">
    <div class="row">
      <div class="mr-auto">
        <app-titulo [titulo]="'Cód. Aluno: ' + alunoSelecionado.id"></app-titulo>
      </div>
      <div class="mt-1">
        <button class="btn btn-sm btn-outline-danger" (click)="voltar()">
          Fechar
        </button>
      </div>
    </div>

    <form [formGroup]="alunoForm">
      <div class="form-group">
        <label for="formGroupExampleInput">Nome</label>
        <input type="text" formControlName="nome" class="form-control">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Sobrenome</label>
        <input type="text" formControlName="sobrenome"  class="form-control">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Telefone</label>
        <input type="text" formControlName="telefone" class="form-control">
      </div>
      <div class="form-group">
        <hr>
        <button class="btn btn-success" (click)="saveAluno()" [disabled]="!alunoForm.valid">Enviar</button>
      </div>
    </form>
  </div>

  <div [ngClass]="{'col-sm-6': alunoSelecionado, 'col-sm-12': !alunoSelecionado}">
    <app-titulo [titulo]="titulo"></app-titulo>

    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">Visualizar</th>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">telefone</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let aluno of alunos">
          <td><button (click)="alunoSelect(aluno)"
            class="text-dark btn btn-sm btn-outline-warning">Detalhe</button></td>
          <td scope="row">{{aluno.id}}</td>
          <td>{{aluno.nome}}</td>
          <td>{{aluno.sobrenome}}</td>
          <td>{{aluno.telefone}}</td>
          <td>
            <div class="btn-group">
              <button (click)="openModal(template, aluno.id)" class="btn btn-sm btn-outline-primary">Professores</button>
              <button class="btn btn-sm btn-outline-danger">Desativar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

<ng-template #template>
  <div class="modal-body">
    <app-professores-alunos (closeModal)="closeModal()" [professores]="profsAlunos"></app-professores-alunos>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn pull-right" aria-label="Close"
      (click)="modalRef.hide()">
      FECHAR
    </button>
  </div>
</ng-template>
