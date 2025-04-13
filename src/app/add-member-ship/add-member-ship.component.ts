import { Component } from '@angular/core';
import { MembershipService } from '../Services/member-ship.service';
import { Router } from '@angular/router';
import { MemberShip } from '../Models/member-ship';

@Component({
  selector: 'app-add-member-ship',
  templateUrl: './add-member-ship.component.html',
  styleUrls: ['./add-member-ship.component.scss']
})
export class AddMemberShipComponent {
  membership: MemberShip = {
    id: 0,
    fees: 0,
    paymentMethod: '',
    status: '',
    start_date: '',
    end_date: '',
    membershipType: '',
    subscriptionPlan: '',
    archived: false
  };
  paymentMethods = [
    'CREDIT_CARD', 'PAYPAL', 'BANK_TRANSFER', 'MOBILE_PAYMENT', 'CRYPTO', 'CASH'
  ];

  subscriptionPlans = [
    'FREE', 'MONTHLY', 'QUARTERLY', 'YEARLY', 'PAY_PER_COURSE'
  ];

  membershipTypes = [
    'PREMIUM', 'BASIC', 'ENTERPRISE'
  ];
  constructor(
    private membershipService: MembershipService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.membershipService.createMembership(this.membership).subscribe({
      next: () => {
        console.log('Membership créé avec succès');
        this.router.navigate(['/listMemberShip']);
      },
      error: (err) => {
        console.error('Erreur de création :', err);
      }
    });
  }
}
