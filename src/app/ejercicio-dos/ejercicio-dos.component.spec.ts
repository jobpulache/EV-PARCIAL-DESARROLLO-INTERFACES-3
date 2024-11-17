import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDosComponent } from './ejercicio-dos.component';

describe('EjercicioDosComponent', () => {
  let component: EjercicioDosComponent;
  let fixture: ComponentFixture<EjercicioDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioDosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
