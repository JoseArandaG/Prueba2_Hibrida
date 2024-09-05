import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarCitasComponent } from './agregar-citas.component';

describe('AgregarCitasComponent', () => {
  let component: AgregarCitasComponent;
  let fixture: ComponentFixture<AgregarCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AgregarCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
