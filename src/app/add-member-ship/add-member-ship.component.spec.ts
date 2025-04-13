import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberShipComponent } from './add-member-ship.component';

describe('AddMemberShipComponent', () => {
  let component: AddMemberShipComponent;
  let fixture: ComponentFixture<AddMemberShipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMemberShipComponent]
    });
    fixture = TestBed.createComponent(AddMemberShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
