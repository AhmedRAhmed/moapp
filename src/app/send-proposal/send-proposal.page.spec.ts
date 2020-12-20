import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendProposalPage } from './send-proposal.page';

describe('SendProposalPage', () => {
  let component: SendProposalPage;
  let fixture: ComponentFixture<SendProposalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProposalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
