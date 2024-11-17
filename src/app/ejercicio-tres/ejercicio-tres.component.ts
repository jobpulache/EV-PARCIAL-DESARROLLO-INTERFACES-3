import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-tres',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-tres.component.html',
  styleUrls: ['./ejercicio-tres.component.css']
})
export class EjercicioTresComponent {
  anioNacimiento: number | null = null;
  mensaje: string = '';

  private validarAnioNacimiento(anio: number | null): boolean {
    return anio !== null && !isNaN(anio) && anio > 1900 && anio <= new Date().getFullYear();
  }

  private calcularEdad(anioNacimiento: number): number {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
  }

  verificarDNI(): void {
    if (!this.validarAnioNacimiento(this.anioNacimiento)) {
      this.mensaje = 'Por favor, ingrese un año de nacimiento válido.';
      return;
    }

    const edad = this.calcularEdad(this.anioNacimiento as number);

    this.mensaje = edad >= 18 
      ? `Tiene ${edad} años. Debe sacar su DNI.` 
      : `Tiene ${edad} años. No necesita DNI todavía.`;
  }
}
