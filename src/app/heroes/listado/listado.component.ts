import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
  }






  constructor() { }
  ngOnInit(): void { }
}
