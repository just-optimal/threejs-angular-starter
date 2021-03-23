import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveAppComponent } from './interactive-app.component';

describe('InteractiveAppComponent', () => {
  let component: InteractiveAppComponent;
  let fixture: ComponentFixture<InteractiveAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
