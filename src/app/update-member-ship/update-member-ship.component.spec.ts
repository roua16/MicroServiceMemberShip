import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberShipComponent } from './update-member-ship.component';

describe('UpdateMemberShipComponent', () => {
  let component: UpdateMemberShipComponent;
  let fixture: ComponentFixture<UpdateMemberShipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMemberShipComponent]
    });
    fixture = TestBed.createComponent(UpdateMemberShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
