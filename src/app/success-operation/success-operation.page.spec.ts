import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessOperationPage } from './success-operation.page';

describe('SuccessOperationPage', () => {
  let component: SuccessOperationPage;
  let fixture: ComponentFixture<SuccessOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessOperationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
