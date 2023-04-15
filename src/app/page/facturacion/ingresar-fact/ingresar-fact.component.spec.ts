import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarFactComponent } from './ingresar-fact.component';

describe('IngresarFactComponent', () => {
  let component: IngresarFactComponent;
  let fixture: ComponentFixture<IngresarFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
