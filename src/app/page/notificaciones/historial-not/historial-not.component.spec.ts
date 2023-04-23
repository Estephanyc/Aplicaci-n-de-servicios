import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialNotComponent } from './historial-not.component';

describe('HistorialNotComponent', () => {
  let component: HistorialNotComponent;
  let fixture: ComponentFixture<HistorialNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
