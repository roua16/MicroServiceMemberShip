import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMemberShipComponentComponent } from './display-member-ship-component.component';

describe('DisplayMemberShipComponentComponent', () => {
  let component: DisplayMemberShipComponentComponent;
  let fixture: ComponentFixture<DisplayMemberShipComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMemberShipComponentComponent]
    });
    fixture = TestBed.createComponent(DisplayMemberShipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
