import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFavsComponent } from './listado-favs.component';

describe('ListadoFavsComponent', () => {
  let component: ListadoFavsComponent;
  let fixture: ComponentFixture<ListadoFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
