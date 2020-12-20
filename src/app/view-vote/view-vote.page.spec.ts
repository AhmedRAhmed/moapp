import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVotePage } from './view-vote.page';

describe('ViewVotePage', () => {
  let component: ViewVotePage;
  let fixture: ComponentFixture<ViewVotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
