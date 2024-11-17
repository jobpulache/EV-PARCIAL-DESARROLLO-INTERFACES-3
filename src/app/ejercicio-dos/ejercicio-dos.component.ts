import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicio-dos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio-dos.component.html',
  styleUrl: './ejercicio-dos.component.css'
})
export class EjercicioDosComponent {
  montoPrestamo: number=0
  cuotas:number=0
  tasaInteres: number = 0
  montoTotal: number=0;
  montoPorCuota:number=0;

  calcularPrestamo():void{
    if(this.montoPrestamo > 5000){
      this.cuotas=3
    }else if (this.montoPrestamo <1000){
      this.cuotas = 1;
    }else  if(this.montoPrestamo >= 2000 && this.montoPrestamo <=3000){
      this.cuotas=1;
    }else{
      this.cuotas=5;
    }
    this.tasaInteres = this.montoPrestamo <4000 ?  0.12: 0.10;

    this.montoTotal = this.montoPrestamo * (1 + this.tasaInteres);
    this.montoPorCuota = this.montoTotal / this.cuotas;
  }
 
}

