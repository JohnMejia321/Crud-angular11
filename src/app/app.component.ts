import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado-personas';
  nombreInput:string="";
  apellidoInput:string="";

  personas:Persona[]=
  [new Persona("juan","perez"),
  new Persona("rodri","restrepo"),
  new Persona("david","restrepo")
]

agregarPersona(){
  this.personas.push(new Persona(this.nombreInput,this.apellidoInput))
}

}
