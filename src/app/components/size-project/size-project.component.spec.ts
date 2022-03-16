import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeProjectComponent } from './size-project.component';

describe('SizeProjectComponent', () => {
  let component: SizeProjectComponent;
  let fixture: ComponentFixture<SizeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
