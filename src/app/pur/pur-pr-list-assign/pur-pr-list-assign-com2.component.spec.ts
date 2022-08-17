import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPrListAssignCom2Component } from './pur-pr-list-assign-com2.component';

describe('PurPrListAssignCom2Component', () => {
  let component: PurPrListAssignCom2Component;
  let fixture: ComponentFixture<PurPrListAssignCom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurPrListAssignCom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurPrListAssignCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
