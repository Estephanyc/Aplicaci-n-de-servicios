import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionComponent } from './mantencion.component';

describe('MantencionComponent', () => {
  let component: MantencionComponent;
  let fixture: ComponentFixture<MantencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantencionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
