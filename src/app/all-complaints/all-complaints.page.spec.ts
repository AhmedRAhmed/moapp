import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllComplaintsPage } from './all-complaints.page';

describe('AllComplaintsPage', () => {
  let component: AllComplaintsPage;
  let fixture: ComponentFixture<AllComplaintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComplaintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
