import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitaRandomComponent } from './cita-random.component';

describe('CitaRandomComponent', () => {
  let component: CitaRandomComponent;
  let fixture: ComponentFixture<CitaRandomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitaRandomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
