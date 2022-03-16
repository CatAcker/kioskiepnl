import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDiyScreenComponent } from './video-diy-screen.component';

describe('VideoDiyScreenComponent', () => {
  let component: VideoDiyScreenComponent;
  let fixture: ComponentFixture<VideoDiyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDiyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDiyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
