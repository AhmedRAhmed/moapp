import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  sginupForm: FormGroup
  error_messages={
    'name': [
      {type:'required', message:'يجب ادخال  الأسم'},
      {type:'pattern', message:'غير مسموح بالحروف الانجليزية / الارقام'}
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
    ],
    'password': [
      {type:'required', message:'يجب ادخال كلمة سر'}
      // {type:'minLength', message:'يجب الا تقل عن 6'}
    ],
    'confirmPassword': [
      {type:'required', message:'يجب تكرار كلمة سر'}
      // {type:'minLength', message:'يجب الا تقل عن 6'}
    ]
  }
  // ^([a-zA-Z ]){2,30}
  // Validators.pattern('^[\u0600-\u06FF]{1,30}')
  constructor(public formBuilder: FormBuilder, private router: Router) {
    this.sginupForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('^01[0125]{1}[0-9]{8}')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required
      ])),
      governrate: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
   }

  ngOnInit() {
  }

  submitsignupForm(){
    console.log(this.sginupForm.value);
    // this.router.navigateByUrl('/tabs/tab1')
    this.sginupForm.reset();
  }

}
