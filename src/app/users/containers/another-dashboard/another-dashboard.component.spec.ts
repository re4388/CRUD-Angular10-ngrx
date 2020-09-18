import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDashboardComponent } from './another-dashboard.component';

describe('AnotherDashboardComponent', () => {
  let component: AnotherDashboardComponent;
  let fixture: ComponentFixture<AnotherDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
