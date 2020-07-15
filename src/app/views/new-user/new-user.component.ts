import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { Insurance } from 'src/app/interfaces/insurance.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  professionalType: Array<string> = ['','Medico','Enfermero','Administrativo'];

  insuranceType: Array<string> = ['', 'Salud', 'Dental', 'Familiar']

  insuranceList: Array<Insurance> = [];

  isPatient: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addInsurance() {
    this.insuranceList.push({
      cardNumber: '',
      name: '',
      insuranceType: ''
    })
  }

  createUser(userForm: NgForm):void{
    this.userService.createUser(userForm.value).subscribe();
    this.router.navigateByUrl('/users')
  }

  switchIsPatient(value: boolean): void {
    this.isPatient = value;
  }

}
