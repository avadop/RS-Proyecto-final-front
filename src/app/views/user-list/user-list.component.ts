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
    // let user: Patient = {
    //   nhc: '01293123',
    //   name: 'asdasdas',
    //   firstSurname: 'surname'
    // }
    //Check tipo de chisme para mostrarlo
    // console.log('collegiate_number' in user)
    this.userService.getUsers()
      .subscribe(res => this.users = res);
  }

  isPatient(user: User): boolean{
    return 'nhc' in user;
  }

  isProfessional(user: User): boolean{
    return 'colegiateNumber' in user;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

}
