import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheFilaComponent } from './coche-fila.component';

describe('CocheFilaComponent', () => {
  let component: CocheFilaComponent;
  let fixture: ComponentFixture<CocheFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocheFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
