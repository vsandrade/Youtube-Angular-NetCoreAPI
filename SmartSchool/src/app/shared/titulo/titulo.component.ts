import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html'
})
export class TituloComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
