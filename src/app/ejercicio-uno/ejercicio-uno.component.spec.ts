import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioUnoComponent } from './ejercicio-uno.component';

describe('EjercicioUnoComponent', () => {
  let component: EjercicioUnoComponent;
  let fixture: ComponentFixture<EjercicioUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
