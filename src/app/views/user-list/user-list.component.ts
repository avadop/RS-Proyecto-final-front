import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model'
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { DialogDeleteUserComponent } from 'src/app/components/dialog-delete-user/dialog-delete-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private dialog: MatDialog) { }

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
  
  deleteAllDoctors(): void{
    forkJoin(this.users
      .filter(user => user.professionalType !== undefined && user.professionalType === 'Médico')
      .map(user => this.userService.deleteUser(user.id)))
      .subscribe();

    window.location.reload();
  }

  openDeleteUserDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === true) this.deleteUser(id)
    })
  }

}
