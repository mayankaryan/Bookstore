import { state } from '@angular/animations';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  personal_form:FormGroup;
  address_form: FormGroup;

  isEditMode:boolean = false;

  user:any={
    name:'poonam ',
    email: 'saragadam.neeraja@bridgelabz.com',
    phone: '9876567876',
    password: 'Pass@123'
  }

   address:any[]=[
    {
      Address: 'atlantis,koramangala 4th block',
      city:'Bangalore',
      state:'Karnataka',
      type:'Home'
    }
   ];
  constructor(private fb:FormBuilder) {
    this.personal_form=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      pwd:['',Validators.required],
      mob:['',Validators.required]
    }); 

    this.address_form=this.fb.group({
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      type:['',Validators.required]
    })
  }

  ngOnInit(): void {
   
  }

  addnewaddress(){
    this.address.push({
      Address: 'Oasis Center, 4th Floor, Sony World Signal, Koramangala Intermediate Ring Road, Bangalore 560078',
      city: 'Bangalore',
      state: 'Karnataka',
      type: 'WORK'
    })
  }

  onAddressTypeChange(index: number, type: string) {
    this.address[index].type = type;
  }

  toggleEditMode1() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      console.log('user details saved', this.user);
    }
  }

  toggleEditMode2() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      console.log('user details saved', this.user);
    }
  }



}
