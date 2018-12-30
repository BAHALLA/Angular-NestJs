import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
  remove(userId) {
    const userIndex = this.users.findIndex(e => e.id === userId);
    this.users.splice(userIndex, 1);
   // return this.getUserById(userId);
  }

}
