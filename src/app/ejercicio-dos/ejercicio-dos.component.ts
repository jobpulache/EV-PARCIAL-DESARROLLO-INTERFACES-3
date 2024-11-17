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
  montoPrestamo: number = 0;
  cuotas: number = 0;
  tasaInteres: number = 0;
  montoTotal: number = 0;
  montoPorCuota: number = 0;
  private determinarCuotas(monto: number){
    if(monto > 5000) return 3 
    if(monto <1000)return 1
    if(monto>=2000 && monto <=3000) return 2
    return 5 ;
  }
  private determinarTasaInteres(monto:number):number{
    return monto <4000? 0.12 : 0.10;
  }


  calcularPrestamo(): void {
   this.cuotas = this.determinarCuotas(this.montoPrestamo)
   this.tasaInteres = this.determinarTasaInteres(this.montoPrestamo)
    
 

    this.montoTotal = this.montoPrestamo * (1 + this.tasaInteres);
    this.montoPorCuota = this.montoTotal / this.cuotas;
  }
}