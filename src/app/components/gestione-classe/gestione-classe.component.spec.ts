import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneClasseComponent } from './gestione-classe.component';

describe('GestioneClasseComponent', () => {
  let component: GestioneClasseComponent;
  let fixture: ComponentFixture<GestioneClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
