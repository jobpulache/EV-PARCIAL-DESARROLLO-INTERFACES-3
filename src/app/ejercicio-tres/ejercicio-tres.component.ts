import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-tres',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-tres.component.html',
  styleUrl: './ejercicio-tres.component.css'
})
export class EjercicioTresComponent {
  anioNacimiento: number | null = null;
  mensaje: string = '';
  verificarDni(): void {
    const anioActualy = new Date().getFullYear();
    const edad = anioActualy - (this.anioNacimiento || 0);
    if (this.anioNacimiento === null || isNaN(this.anioNacimiento)) {
      this.mensaje = 'Igrese un número valido';
    }else if(edad >=18){
      this.mensaje = `Ve a sacar DNI. Tienes ${edad}`
    }else{
      this.mensaje = `No necesitas sacar DNI. Todavia tienes ${edad}`
    }
  }
}
