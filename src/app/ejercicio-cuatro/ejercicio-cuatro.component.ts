import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio-cuatro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-cuatro.component.html',
  styleUrls: ['./ejercicio-cuatro.component.css']
})
export class EjercicioCuatroComponent {
  numerosPares: number[] = [];

  constructor() {
    this.obtenerNumerosPares();
  }

  private obtenerNumerosPares(): void {
    this.numerosPares = Array.from({ length: 11 }, (_, i) => 20 - i)
      .filter(num => num % 2 === 0); 
  }
}
