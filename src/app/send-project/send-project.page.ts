import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-project',
  templateUrl: './send-project.page.html',
  styleUrls: ['./send-project.page.scss'],
})
export class SendProjectPage implements OnInit {
  projectFrom: FormGroup;
  filePath:any="";
  error_messages={
    'projectTitle': [
      {type:'required', message:'يجب ادخال عنوان للشكوى'},
      {type:'minlength', message:'العنوان قصير للغاية'}
    ],
    'projectSubject': [
      {type:'required', message:'يجب ادخال الشكوى'}
    ]
  }

  constructor(private formBuilder:FormBuilder, private router: Router) { 
    this.projectFrom = this.formBuilder.group({
      projectTitle : new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      projectSubject : new FormControl('', Validators.compose([Validators.required])),
      projectfile : new FormControl('', Validators.compose([])),
    })
  }

  ngOnInit() {
  }

  submitProjectForm(){
    console.log(this.projectFrom.value)
    this.router.navigateByUrl('success-operation/proj')
  }
  
  file: File;
 changeFileListener($event) : void {
    this.file = $event.target.files[0];
    console.log(this.file)
    this.filePath = (this.file).name
  }


}
