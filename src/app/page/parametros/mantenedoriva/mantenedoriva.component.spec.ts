import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorivaComponent } from './mantenedoriva.component';

describe('MantenedorivaComponent', () => {
  let component: MantenedorivaComponent;
  let fixture: ComponentFixture<MantenedorivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedorivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
