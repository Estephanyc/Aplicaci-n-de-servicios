import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorvaloresComponent } from './mantenedorvalores.component';

describe('MantenedorvaloresComponent', () => {
  let component: MantenedorvaloresComponent;
  let fixture: ComponentFixture<MantenedorvaloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorvaloresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedorvaloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
