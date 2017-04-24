import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampCreditComponent } from './camp-credit.component';

describe('CampCreditComponent', () => {
  let component: CampCreditComponent;
  let fixture: ComponentFixture<CampCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
