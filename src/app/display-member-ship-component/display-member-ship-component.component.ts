import { Component } from '@angular/core';
import { MemberShip } from '../Models/member-ship';
import { MembershipService } from '../Services/member-ship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-member-ship-component',
  templateUrl: './display-member-ship-component.component.html',
  styleUrls: ['./display-member-ship-component.component.scss']
})
export class DisplayMemberShipComponentComponent {
  memberships: MemberShip[] = [];
  idToDelete: number | null = null;

  constructor(private membershipService: MembershipService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.membershipService.getAllMemberships().subscribe({
      next: data => this.memberships = data,
      error: err => console.error('Error fetching memberships', err)
    });
  }

  memberShipDetails(id: number): void {
    this.router.navigate(['/DetailMemberShip', id]);
  }
  updatememberShip(id: number): void {
    this.router.navigate(['/updateMemberShip', id]);

  }

  addMemberShip(): void {
    this.router.navigate(['/AddMemberShip']);
  }

  setIdToDelete(id: number): void {
    this.idToDelete = id;
  }

  confirmDelete(): void {
    if (this.idToDelete !== null) {
      this.membershipService.deleteMembership(this.idToDelete).subscribe({
        next: () => {
          this.getAll();
          this.idToDelete = null;
        },
        error: err => console.error('Error deleting membership', err)
      });
    }
  }
}

