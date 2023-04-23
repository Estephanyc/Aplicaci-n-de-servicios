import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCobroComponent } from './gestion-cobro.component';

describe('GestionCobroComponent', () => {
  let component: GestionCobroComponent;
  let fixture: ComponentFixture<GestionCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCobroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
