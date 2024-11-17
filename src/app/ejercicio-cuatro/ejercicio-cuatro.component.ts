import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-cuatro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-cuatro.component.html',
  styleUrl: './ejercicio-cuatro.component.css'
})
export class EjercicioCuatroComponent {
  numerosPares: number[] = [];
  constructor() {
    this.obtenerNumerosPares();
  }

  obtenerNumerosPares() {
    for (let num = 20; num >= 10; num--) {
      if (num % 2 === 0)
        this.numerosPares.push(num)
    }
  }

}
