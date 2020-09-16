import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css'],
})
export class UserListsComponent implements OnInit {
  @Input() users: User[];

  constructor() {}

  ngOnInit(): void {}
}
