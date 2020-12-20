import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-proposal',
  templateUrl: './send-proposal.page.html',
  styleUrls: ['./send-proposal.page.scss'],
})
export class SendProposalPage implements OnInit {
  proposalFrom: FormGroup;
  filePath:any="";
  error_messages={
    'propTitle': [
      {type:'required', message:'يجب ادخال عنوان للاقتراح'},
      {type:'minlength', message:'العنوان قصير للغاية'}
    ],
    'propSubject': [
      {type:'required', message:'يجب ادخال نص الاقتراح'}
    ]
  }

  constructor( private formBuilder: FormBuilder, private router: Router) {
    this.proposalFrom = this.formBuilder.group({
      propTitle : new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      propSubject : new FormControl('', Validators.compose([Validators.required])),
      propfile : new FormControl('', Validators.compose([])),
    })
   }

  ngOnInit() {
  }

  submitProposalForm(){
    console.log(this.proposalFrom.value)
    this.router.navigateByUrl('success-operation/sugg')

  }
  
  file: File;
 changeFileListener($event) : void {
    this.file = $event.target.files[0];
    console.log(this.file)
    this.filePath = (this.file).name
  }

}
