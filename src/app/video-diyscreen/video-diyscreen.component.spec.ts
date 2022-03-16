import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDiyscreenComponent } from './video-diyscreen.component';

describe('VideoDiyscreenComponent', () => {
  let component: VideoDiyscreenComponent;
  let fixture: ComponentFixture<VideoDiyscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDiyscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDiyscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
