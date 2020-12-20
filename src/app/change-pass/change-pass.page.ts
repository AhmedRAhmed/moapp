import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage implements OnInit {

  changePassForm: FormGroup;
  error_messages={
    'passwordNew': [
      {type:'required', message:'يجب ادخال كلمة السر الجديدة'},
    ],
    'passwordOld': [
      {type:'required', message:'يجب ادخال كلمة السر القديمة'}
    ]
  }

  constructor(
    private router:Router,
    public formBuilder: FormBuilder,
  ) { 
    this.changePassForm = this.formBuilder.group({
      passwordOld: new FormControl('', Validators.compose([Validators.required])),
      passwordNew: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  ngOnInit() {
  }
  user={id:'1', Name:'أحمد رمضان ', email:'ahmed@gmail.com', phone:'01022082260',pass:'123', gov:'أسيوط', city:'ساحل سليم'};
  submitPassForm(){
    if((this.changePassForm.value).passwordOld === this.user.pass){
      console.log('pass Changed')
    this.router.navigateByUrl('success-operation/pass')
    }else{
      console.log('incorrect pass')
    }
    console.log(this.changePassForm.value);
  }
  // ****************************
  input1Type:String = "password";
  input2Type:String = "password";
  hidden1:boolean;
  hidden2:boolean;
  shown1:boolean;
  shown2:boolean;
  showPass1(){
    if(this.input1Type == 'password'){
      this.input1Type = 'text';
      this.hidden1 = false;
      this.shown1 = true;
    }else if(this.input1Type == 'text'){
      this.input1Type = 'password';
      this.hidden1 = true;
      this.shown1 = false;
    }
  }
// -------
showPass2(){
  if(this.input2Type == 'password'){
    this.input2Type = 'text';
    this.hidden2 = false;
    this.shown2 = true;
  }else if(this.input2Type == 'text'){
    this.input2Type = 'password';
    this.hidden2 = true;
    this.shown2 = false;
  }
}

}
