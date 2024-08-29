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





}
