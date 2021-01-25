import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainCardComponent } from './app-main-card.component';

describe('AppMainCardComponent', () => {
  let component: AppMainCardComponent;
  let fixture: ComponentFixture<AppMainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
