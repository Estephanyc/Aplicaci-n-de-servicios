import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFacturacionComponent } from './config-facturacion.component';

describe('ConfigFacturacionComponent', () => {
  let component: ConfigFacturacionComponent;
  let fixture: ComponentFixture<ConfigFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFacturacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
