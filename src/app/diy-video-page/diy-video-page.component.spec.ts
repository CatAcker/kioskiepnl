import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyVideoPageComponent } from './diy-video-page.component';

describe('DiyVideoPageComponent', () => {
  let component: DiyVideoPageComponent;
  let fixture: ComponentFixture<DiyVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyVideoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
