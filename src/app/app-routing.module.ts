import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayMemberShipComponentComponent } from './display-member-ship-component/display-member-ship-component.component';
import { MembershipDetailComponent } from './membership-detail/membership-detail.component';
import { AddMemberShipComponent } from './add-member-ship/add-member-ship.component';
import { UpdateMemberShipComponent } from './update-member-ship/update-member-ship.component';

const routes: Routes = [
  { path: "listMemberShip", component: DisplayMemberShipComponentComponent },
  { path: "DetailMemberShip/:id", component: MembershipDetailComponent },
  { path: "AddMemberShip", component: AddMemberShipComponent },
  { path: "updateMemberShip/:id", component: UpdateMemberShipComponent },


    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
