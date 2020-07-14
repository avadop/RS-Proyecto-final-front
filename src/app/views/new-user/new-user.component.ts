import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Patient, Professional} from 'src/app/models/user.model'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  nhc: string;
  colegiateNumber: string;
  name: string;
  surname:string;

  isPatient: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createPatient():void{
    let patient: Patient = {
      nhc: this.nhc,
      name: this.name,
      firstSurname: this.surname
    }

    this.userService.createUser(patient);
  }

  createProfessional():void{
    let professional: Professional = {
      colegiateNumber: this.colegiateNumber,
      name: this.name,
      firstSurname: this.surname
    }

    this.userService.createUser(professional);
  }

  switchUser(): void {
    this.isPatient = !this.isPatient;
  }

}
