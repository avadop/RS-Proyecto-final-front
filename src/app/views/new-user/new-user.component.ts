import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Insurance } from 'src/app/interfaces/insurance.type';
import { Router } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewUserComponent implements OnInit {
  professionalType: Array<string> = ['','Médico','Enfermero','Administrativo'];

  insuranceType: Array<string> = ['', 'Salud', 'Dental', 'Familiar']

  isPatient: boolean = true;
  
  newUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.newUserForm = this.formBuilder.group({
      nhc: ['', Validators.required],

      membershipNumber: ['', Validators.required],
      professionalType: '',

      name: ['', Validators.required],
      firstSurname: ['', Validators.required],
      secondSurname: '',
      gender: '',
      birthDate: '',
      idDocument: '',

      address: this.formBuilder.group({
        street: '',
        number: '',
        door: '',
        postalCode: '',
        city: ''
      }),

      insuranceList: this.formBuilder.array([])

    })
  }

  addInsurance() {  
    this.insuranceList.push(this.formBuilder.group({
      cardNumber: '',
      name: '',
      insuranceType: ''
    }));
  }

  removeInsurance(i: number): void{
    this.insuranceList.removeAt(i);
  }

  get insuranceList(): FormArray {
    return this.newUserForm.get('insuranceList') as FormArray;
  }

  createUser():void{

    if(this.isPatient){
      this.newUserForm.removeControl('membershipNumber');
      this.newUserForm.removeControl('professionalType');
    } else {
      this.newUserForm.removeControl('nhc');
      this.newUserForm.removeControl('insuranceList')
    }

    this.userService.createUser(this.newUserForm.value)
      .subscribe();

    this.router.navigateByUrl('/users');
  }

  switchIsPatient(value: boolean): void {
    this.isPatient = value;
  }

  isFormValid(): boolean{
    let valid: boolean = false;

    if(this.newUserForm.controls['name'].valid && this.newUserForm.controls['firstSurname'].valid){

      if(this.isPatient && this.newUserForm.controls['nhc'].valid){
        valid = true;
      } 
      else if(!this.isPatient && this.newUserForm.controls['membershipNumber'].valid){
        valid = true;
      }
    }

    return valid;
  }

}
