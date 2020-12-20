import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendProjectPage } from './send-project.page';

describe('SendProjectPage', () => {
  let component: SendProjectPage;
  let fixture: ComponentFixture<SendProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
