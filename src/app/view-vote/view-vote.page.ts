import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-vote',
  templateUrl: './view-vote.page.html',
  styleUrls: ['./view-vote.page.scss'],
})
export class ViewVotePage implements OnInit {
  voteForm: FormGroup;
  vote:any=
    {id:'1',
    title:'تصويت علي التعديلات الدستورية 2020',
    subject:'هو ببساطة نص شكلي بمعنى أنالغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودورالنشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة',
    endDate:'25/12/2020'};

    voteOpts:any=[
      {voteId:'1',optId:'1', optTitle:'أوافق'}, 
      {voteId:'1',optId:'2', optTitle:'لا اوافق'}
    ]
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    ) {
      this.voteForm = this.formBuilder.group({
        vote: new FormControl('', Validators.compose([Validators.required]))
      })
     }

  ngOnInit() {
  }

  submitVote(){
    console.log(this.voteForm.value);

  }

}
