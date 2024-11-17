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

  verificarDNI(): void {
    const anioActual = new Date().getFullYear(); 
    const edad = anioActual - (this.anioNacimiento || 0);

    if (this.anioNacimiento === null || isNaN(this.anioNacimiento)) {
      this.mensaje = 'Por favor, ingrese un año válido.';
    } else if (edad >= 18) {
      this.mensaje = `Tiene ${edad} años. Debe sacar su DNI.`;
    } else {
      this.mensaje = `Tiene ${edad} años. No necesita DNI todavía.`;
    }
  }
}
