import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  error_messages={
    'phone': [
      {type:'required', message:'يجب ادخال رقم الهاتف'},
      {type:'minlength', message:'يجب الا يقل عن 11 رقماً'}
    ],
    'password': [
      {type:'required', message:'يجب ادخال كلمة السر'}
    ]
  }

  constructor(
    private router:Router,
    public formBuilder: FormBuilder,
    private news:NewsService
    ) { 
        this.loginForm = this.formBuilder.group({
          phone: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11)])),
          password: new FormControl('', Validators.compose([Validators.required]))
        })
      }

  ngOnInit() {
  }

  submitLoginForm(){
    console.log(this.loginForm.value);

    this.router.navigateByUrl('/tabs/tab1')
    
  }

  // ************************
  input2Type:String = "password";
  hidden2:boolean;
  shown2:boolean;
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
