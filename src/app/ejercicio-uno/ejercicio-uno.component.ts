import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ejercicio-uno',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio-uno.component.html',
  styleUrl: './ejercicio-uno.component.css'
})
export class EjercicioUnoComponent {
  compra: Compra = {
    cantidad: 0,
    precio: 0,
    total: 0,
    descuentoAplicado: false,
    totalFinal: 0,
  };
  calcularDescuento(): void {
    const total = this.compra.cantidad * this.compra.precio;
    this.compra.total= total;
    this.compra.descuentoAplicado = total > 200;
    this.compra.totalFinal = this.compra.descuentoAplicado ? total*0.8 : total;
  }
}
interface Compra {
  cantidad: number;
  precio: number;
  total: number;
  descuentoAplicado: boolean;
  totalFinal: number;
}

