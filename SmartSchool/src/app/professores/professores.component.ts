import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    {id: 1, nome: 'Lauro', disciplina: 'Matemática' },
    {id: 2, nome: 'Roberto', disciplina: 'Física' },
    {id: 3, nome: 'Ronaldo', disciplina: 'Português' },
    {id: 4, nome: 'Rodrigo', disciplina: 'Inglês' },
    {id: 5, nome: 'Alexandre', disciplina: 'Programação' }
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }


  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

}
