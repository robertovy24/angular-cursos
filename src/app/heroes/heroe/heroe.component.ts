import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css'],

})

export class HeroeComponent{
    
    nombre: string = 'IronMan';
    edad: number = 37;

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    get capitalizado(): string{
        return `${this.nombre.toUpperCase()}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spider Man';
    }

    cambiarEdad(): void{
        this.edad = 45;
    }


}