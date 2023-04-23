import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSolicitudesComponent } from './not-solicitudes.component';

describe('NotSolicitudesComponent', () => {
  let component: NotSolicitudesComponent;
  let fixture: ComponentFixture<NotSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSolicitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
