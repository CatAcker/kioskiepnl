import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeProjectScreenComponent } from './size-project-screen.component';

describe('SizeProjectScreenComponent', () => {
  let component: SizeProjectScreenComponent;
  let fixture: ComponentFixture<SizeProjectScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeProjectScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeProjectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
