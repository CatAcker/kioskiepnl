import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTileScreenComponent } from './choose-tile-screen.component';

describe('ChooseTileScreenComponent', () => {
  let component: ChooseTileScreenComponent;
  let fixture: ComponentFixture<ChooseTileScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTileScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
