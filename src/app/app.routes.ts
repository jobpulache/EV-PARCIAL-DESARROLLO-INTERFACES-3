import { Routes } from '@angular/router';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { EjercicioDosComponent } from './ejercicio-dos/ejercicio-dos.component';
import { EjercicioTresComponent } from './ejercicio-tres/ejercicio-tres.component';
import { EjercicioCuatroComponent } from './ejercicio-cuatro/ejercicio-cuatro.component';

export const routes: Routes = [
    {path: "ejercicioUno", component: EjercicioUnoComponent},
    {path:"ejercicioDos", component: EjercicioDosComponent},
    {path:"ejercicioTres", component:EjercicioTresComponent},
    {path:"ejercicioCuatro", component:EjercicioCuatroComponent}
];
