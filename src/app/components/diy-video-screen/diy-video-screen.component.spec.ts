import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyVideoScreenComponent } from './diy-video-screen.component';

describe('DiyVideoScreenComponent', () => {
  let component: DiyVideoScreenComponent;
  let fixture: ComponentFixture<DiyVideoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyVideoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyVideoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
