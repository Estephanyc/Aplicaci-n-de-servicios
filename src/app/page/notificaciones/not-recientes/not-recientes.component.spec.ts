import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRecientesComponent } from './not-recientes.component';

describe('NotRecientesComponent', () => {
  let component: NotRecientesComponent;
  let fixture: ComponentFixture<NotRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotRecientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
