import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvinciasPage } from './provincias.page';

describe('ProvinciasPage', () => {
  let component: ProvinciasPage;
  let fixture: ComponentFixture<ProvinciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvinciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
