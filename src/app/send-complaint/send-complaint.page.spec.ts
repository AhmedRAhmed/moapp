import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendComplaintPage } from './send-complaint.page';

describe('SendComplaintPage', () => {
  let component: SendComplaintPage;
  let fixture: ComponentFixture<SendComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendComplaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
