import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioCuatroComponent } from './ejercicio-cuatro.component';

describe('EjercicioCuatroComponent', () => {
  let component: EjercicioCuatroComponent;
  let fixture: ComponentFixture<EjercicioCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioCuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
