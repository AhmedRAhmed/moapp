import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
  editInfoFrom: FormGroup;
  user={id:'1', Name:'أحمد رمضان ', email:'ahmed@gmail.com', phone:'01022082260',pass:'123', gov:'أسيوط', city:'ساحل سليم'};
  error_messages={
    'name': [
      {type:'minLength', message:'الاسم قصير للغاية'},
      {type:'required', message:'يجب ادخال الاسم'}
    ],
    'phone': [
      {type:'required', message:'يجب ادخال رقم الهاتف'},
      {type:'pattern', message:'رقم هاتف غير صحيح'},
    ],
    'email': [
      {type:'email', message:'الايميل غير صحيح'}
    ],
    'governrate': [
      {type:'required', message:'يجب اختيار المحافظة '}
    ],
    'city': [
      {type:'required', message:'يجب اختيار المدينة '}
    ]
  }
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.editInfoFrom = this.formBuilder.group({
      name: new FormControl(this.user.Name, Validators.compose([
        Validators.minLength(2),Validators.required
      ])),
      phone: new FormControl(this.user.phone, Validators.compose([
        Validators.pattern('^01[0125]{1}[0-9]{8}'),Validators.required
      ])),
      email: new FormControl(this.user.email, Validators.compose([
        Validators.email
      ])),
      city: new FormControl(this.user.city, Validators.compose([Validators.required])),
      governrate: new FormControl(this.user.gov, Validators.compose([Validators.required]))
    })
   }

  ngOnInit() {
  }

  submitsignupForm(){
    console.log(this.editInfoFrom.value);
    // this.router.navigateByUrl('success-operation/data')

  }


}
