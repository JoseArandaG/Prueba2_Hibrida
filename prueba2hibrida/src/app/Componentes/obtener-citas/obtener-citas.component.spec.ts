import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObtenerCitasComponent } from './obtener-citas.component';

describe('ObtenerCitasComponent', () => {
  let component: ObtenerCitasComponent;
  let fixture: ComponentFixture<ObtenerCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ObtenerCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ObtenerCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
