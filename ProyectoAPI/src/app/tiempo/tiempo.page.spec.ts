import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiempoPage } from './tiempo.page';

describe('TiempoPage', () => {
  let component: TiempoPage;
  let fixture: ComponentFixture<TiempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
