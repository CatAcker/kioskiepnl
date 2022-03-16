import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksScreenComponent } from './banks-screen.component';

describe('BanksScreenComponent', () => {
  let component: BanksScreenComponent;
  let fixture: ComponentFixture<BanksScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
