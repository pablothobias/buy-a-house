import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardOutputInfoComponent } from './app-card-output-info.component';

describe('AppCardOutputInfoComponent', () => {
  let component: AppCardOutputInfoComponent;
  let fixture: ComponentFixture<AppCardOutputInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardOutputInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardOutputInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
