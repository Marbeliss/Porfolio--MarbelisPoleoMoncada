import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasLaboralesComponent } from './referencias-laborales.component';

describe('ReferenciasLaboralesComponent', () => {
  let component: ReferenciasLaboralesComponent;
  let fixture: ComponentFixture<ReferenciasLaboralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciasLaboralesComponent]
    });
    fixture = TestBed.createComponent(ReferenciasLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
