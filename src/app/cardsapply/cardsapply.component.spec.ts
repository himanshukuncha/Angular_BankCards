import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsapplyComponent } from './cardsapply.component';

describe('CardsapplyComponent', () => {
  let component: CardsapplyComponent;
  let fixture: ComponentFixture<CardsapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
