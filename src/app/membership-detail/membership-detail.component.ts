import { Component } from '@angular/core';
import { MemberShip } from '../Models/member-ship';
import { MembershipService } from '../Services/member-ship.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-membership-detail',
  templateUrl: './membership-detail.component.html',
  styleUrls: ['./membership-detail.component.scss']
})
export class MembershipDetailComponent {
  membership!: MemberShip;  // le "!" indique qu'il sera défini plus tard

  constructor(
    private membershipService: MembershipService,
    private route: ActivatedRoute,private router:Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.membershipService.getMembershipById(id).subscribe({
      next: (data) => {
        this.membership = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du membership', err);
      }
    });
  }
  backToList() {
    this.router.navigate(['/listMemberShip']);
  }
}
