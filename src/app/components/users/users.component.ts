import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: User[] = [];
  listView: boolean = false;

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data) => (this.users = data.results));
    console.log(this.users);
  }
}
