import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User;

  isPatient: boolean = false;

  editingPatientData: boolean = false;
  editingProfessionalData: boolean = false;
  editingPersonalData: boolean = false;
  editingAddress: boolean = false;
  addingInsurance: boolean = false;

  modifyingInsurance: boolean = false;
  insuranceId: number;

  nhc: string;
  membershipNumber: string;
  professionalType: string;

  addressForm: FormGroup;
  insuranceForm: FormGroup;

  name: string;
  firstSurname: string;
  secondSurname: string;
  gender: string;
  birthDate: string;
  idDocument: string;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUserById(params.user_id)
        .subscribe(res => {
          this.user = res;
          if ('nhc' in this.user) this.isPatient = true;
        }, error => {
          if (error.status === 404)
            this.router.navigate(['Error404'], { relativeTo: this.route })
        })
    });
  }

  switchToEditPatientData(): void {
    this.editingPatientData = true;
    this.nhc = this.user.nhc;
  }

  saveNHC(): void {
    this.user.nhc = this.nhc;
    this.userService.updateUser(this.user._id, this.user).subscribe();
    this.editingPatientData = false;
  }

  switchToEditProfessionalData(): void {
    this.editingProfessionalData = true;
    this.membershipNumber = this.user.membershipNumber;
    this.professionalType = this.user.professionalType;
  }

  saveProfessionalData(): void {
    this.user.membershipNumber = this.membershipNumber;
    this.user.professionalType = this.professionalType;

    this.userService.updateUser(this.user._id, this.user).subscribe();
    this.editingProfessionalData = false;
  }

  switchToEditPersonalData(): void {
    this.name = this.user.name;
    this.firstSurname = this.user.firstSurname;
    this.secondSurname = this.user.secondSurname;
    this.gender = this.user.gender;
    this.birthDate = this.user.birthDate;
    this.idDocument = this.user.idDocument;

    this.editingPersonalData = true;
  }

  savePersonalData(): void {
    this.user.name = this.name;
    this.user.firstSurname = this.firstSurname;
    this.user.secondSurname = this.secondSurname;
    this.user.gender = this.gender;
    this.user.birthDate = this.birthDate;
    this.user.idDocument = this.idDocument;

    this.userService.updateUser(this.user._id, this.user).subscribe();

    this.editingPersonalData = false;
  }

  switchToEditAddress(): void  {
    this.editingAddress = true;
    this.addressForm = this.formBuilder.group({
      street: this.user.address.street,
      number: this.user.address.number,
      door: this.user.address.door,
      postalCode: this.user.address.postalCode,
      city: this.user.address.city
    });
  }

  saveAddress(): void {
    this.user.address = this.addressForm.value;

    this.userService.updateUser(this.user._id, this.user).subscribe();
    this.editingAddress = false;
  }


  deleteInsurance(i: number): void {
    this.user.insuranceList.splice(i, 1);
  }

  switchToModifyInsurance(i: number): void{
    this.insuranceId = i;

    this.insuranceForm = this.formBuilder.group({
      cardNumber: this.user.insuranceList[i].cardNumber,
      name: this.user.insuranceList[i].name,
      insuranceType: this.user.insuranceList[i].insuranceType
    });

    this.modifyingInsurance = true;
  }

  addInsurance(): void {
    this.insuranceForm = this.formBuilder.group({
      cardNumber: '',
      name: '',
      insuranceType: ''
    })

    this.addingInsurance = true;
  }

  saveInsurance(): void{
    if(this.addingInsurance){
      this.user.insuranceList.push(this.insuranceForm.value);
      this.addingInsurance = false;
    } else{
      this.user.insuranceList[this.insuranceId] = this.insuranceForm.value;
      this.modifyingInsurance = false;
    }
    
    this.userService.updateUser(this.user._id, this.user).subscribe();
  }

}
