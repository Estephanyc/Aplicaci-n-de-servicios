import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeriaConfigComponent } from './mensajeria-config.component';

describe('MensajeriaConfigComponent', () => {
  let component: MensajeriaConfigComponent;
  let fixture: ComponentFixture<MensajeriaConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeriaConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeriaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
