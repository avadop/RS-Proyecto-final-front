import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(res => this.users = res);
  }

  isPatient(user: User): boolean{
    return 'nhc' in user;
  }

  isProfessional(user: User): boolean{
    return 'membershipNumber' in user;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe();
    window.location.reload();
  }

}
