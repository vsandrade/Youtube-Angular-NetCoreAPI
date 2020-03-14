import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 33225555 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 3354288 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 55668899 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 6565659 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 565685415 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 456454545 },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 9874512 },
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

}
