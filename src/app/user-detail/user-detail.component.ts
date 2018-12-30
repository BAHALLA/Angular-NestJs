import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
   id: number;
  constructor(private usersService: UsersService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['userId'];
    this.usersService.getUser(this.id).subscribe( user => this.user = user);
  }
}
