import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherUserListComponent } from './another-user-list.component';

describe('AnotherUserListComponent', () => {
  let component: AnotherUserListComponent;
  let fixture: ComponentFixture<AnotherUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
