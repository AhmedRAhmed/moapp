import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrePage } from './pre.page';

describe('PrePage', () => {
  let component: PrePage;
  let fixture: ComponentFixture<PrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
