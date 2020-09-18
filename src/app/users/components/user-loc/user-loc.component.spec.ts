import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocComponent } from './user-loc.component';

describe('UserLocComponent', () => {
  let component: UserLocComponent;
  let fixture: ComponentFixture<UserLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
