import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPlayer } from './full-player';

describe('FullPlayer', () => {
  let component: FullPlayer;
  let fixture: ComponentFixture<FullPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
