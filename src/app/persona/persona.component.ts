import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;
  
  /* se puede hacer privado haciendo uso de los getters y setters
  private edad: number = 28;*/

  /*getEdad():number{
    return this.edad;
  }*/
}
