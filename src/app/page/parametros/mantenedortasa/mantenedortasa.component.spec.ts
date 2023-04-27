import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedortasaComponent } from './mantenedortasa.component';

describe('MantenedortasaComponent', () => {
  let component: MantenedortasaComponent;
  let fixture: ComponentFixture<MantenedortasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedortasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedortasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
