import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = "Ingeniero S";

    agregarPersona(){
        this.mensaje = 'Persona agregada';
    }

    modificarTitulo(event: Event){
        console.log('Entrando a metodo modiicar titulo');
        this.titulo = (<HTMLInputElement>event.target).value;
    }
}