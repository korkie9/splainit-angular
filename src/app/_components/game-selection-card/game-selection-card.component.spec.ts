import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectionCardComponent } from './game-selection-card.component';

describe('GameSelectionCardComponent', () => {
  let component: GameSelectionCardComponent;
  let fixture: ComponentFixture<GameSelectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSelectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
