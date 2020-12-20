import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-send-complaint',
  templateUrl: './send-complaint.page.html',
  styleUrls: ['./send-complaint.page.scss'],
})
export class SendComplaintPage implements OnInit {
  complaintFrom: FormGroup;
  filePath:any="";
  error_messages={
    'complaintTitle': [
      {type:'required', message:'يجب ادخال عنوان للشكوى'},
      {type:'minlength', message:'العنوان قصير للغاية'}
    ],
    'complaintSubject': [
      {type:'required', message:'يجب ادخال الشكوى'}
    ]
  }

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.complaintFrom = this.formBuilder.group({
      complaintTitle : new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      complaintSubject : new FormControl('', Validators.compose([Validators.required])),
      complaintfile : new FormControl('', Validators.compose([])),
    })
  }

  ngOnInit() {
  }
   
  file: File;
 changeFileListener($event) : void {
    this.file = $event.target.files[0];
    console.log(this.file)
    this.filePath = (this.file).name
  }

  submitComplaintForm(){
    console.log(this.complaintFrom.value)
    this.router.navigateByUrl('success-operation/comp')
  }
 

}
