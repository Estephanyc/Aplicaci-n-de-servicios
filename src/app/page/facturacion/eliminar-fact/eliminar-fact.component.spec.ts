import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFactComponent } from './eliminar-fact.component';

describe('EliminarFactComponent', () => {
  let component: EliminarFactComponent;
  let fixture: ComponentFixture<EliminarFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
