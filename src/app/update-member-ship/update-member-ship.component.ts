import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipService } from '../Services/member-ship.service';
import { MemberShip } from '../Models/member-ship';

@Component({
  selector: 'app-update-member-ship',
  templateUrl: './update-member-ship.component.html',
  styleUrls: ['./update-member-ship.component.scss']
})
export class UpdateMemberShipComponent {
  membershipId!: number;
  membership: MemberShip = {
    id: 0,
    fees: 0,
    paymentMethod: '',
    status: '',
    start_date: '',
    end_date: '',
    membershipType: '',
    subscriptionPlan: '', // <- IMPORTANT
    archived: false
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private membershipService: MembershipService
  ) {}

  ngOnInit(): void {
    this.membershipId = this.route.snapshot.params['id'];
    this.membershipService.getMembershipById(this.membershipId).subscribe({
      next: data => this.membership = data,
      error: err => console.error('Error loading membership', err)
    });
  }

  onSubmit(): void {
    console.log('Subscription Plan Selected:', this.membership.subscriptionPlan);
    this.membershipService.updateMembership(this.membershipId, this.membership).subscribe({
      next: () => {
        console.log('Membership updated');
        this.router.navigate(['/listMemberShip']);
      },
      error: err => console.error('Update failed', err)
    });
  }
}
