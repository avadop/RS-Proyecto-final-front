import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Patient, Professional} from 'src/app/models/user.model'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createPatient():void{
    let patient: Patient = {
      nhc: '000012',
      name: 'Name',
      firstSurname: 'Surname'
    }

    this.userService.createUser(patient);
  }

  createProfessional():void{
    let professional: Professional = {
      colegiateNumber: '000012',
      name: 'Name',
      firstSurname: 'Surname'
    }

    this.userService.createUser(professional);
  }

}
