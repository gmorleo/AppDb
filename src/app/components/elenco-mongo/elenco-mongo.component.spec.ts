import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoMongoComponent } from './elenco-mongo.component';

describe('ElencoMongoComponent', () => {
  let component: ElencoMongoComponent;
  let fixture: ComponentFixture<ElencoMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
