import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapa2agenciaComponent } from './mapa2agencia.component';

describe('Mapa2agenciaComponent', () => {
  let component: Mapa2agenciaComponent;
  let fixture: ComponentFixture<Mapa2agenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mapa2agenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapa2agenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
