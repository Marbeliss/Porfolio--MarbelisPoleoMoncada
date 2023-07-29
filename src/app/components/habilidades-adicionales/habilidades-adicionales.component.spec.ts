import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesAdicionalesComponent } from './habilidades-adicionales.component';

describe('HabilidadesAdicionalesComponent', () => {
  let component: HabilidadesAdicionalesComponent;
  let fixture: ComponentFixture<HabilidadesAdicionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesAdicionalesComponent]
    });
    fixture = TestBed.createComponent(HabilidadesAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
