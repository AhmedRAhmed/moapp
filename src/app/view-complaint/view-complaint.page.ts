import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.page.html',
  styleUrls: ['./view-complaint.page.scss'],
})
export class ViewComplaintPage implements OnInit {
  complaintFrom: FormGroup;
  filePath:any="";
  error_messages={
    'answerSubject': [
      {type:'required', message:'لا يمكن ارسال رد فارغ'}
    ]
  }
// ********************************************** Static test Data *************************************************
  complaint: any={id:'1', title:'عنوان الشكوى رقم 1', creationDate:'10/03/2020',subj:'نص شكلي بمعنى أن هو ببساطة نص شكلي بمعنى أن الغاية هي الشكلمعنى أن الغاية هي'}
  answars: any=[
    {id:'1', fromUser:false, creationDate:'10/03/2020',subj:'نالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع'},
    {id:'2', fromUser:true, creationDate:'13/03/2020',subj:'نص شكلي بمعنى أن هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل'},
]
  constructor(private formBuilder: FormBuilder) {
    this.complaintFrom = this.formBuilder.group({
      answerSubject : new FormControl('', Validators.compose([Validators.required])),
      complaintfile : new FormControl('', Validators.compose([])),
    })
   }

  ngOnInit() {
  }

  submitComplaintForm(){
    console.log(this.complaintFrom.value)
  }
  
  file: File;
 changeFileListener($event) : void {
    this.file = $event.target.files[0];
    console.log(this.file)
    this.filePath = (this.file).name
  }

}
