import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayMemberShipComponentComponent } from './display-member-ship-component/display-member-ship-component.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MembershipDetailComponent } from './membership-detail/membership-detail.component';
import { AddMemberShipComponent } from './add-member-ship/add-member-ship.component';
import { FormsModule } from '@angular/forms';
import { UpdateMemberShipComponent } from './update-member-ship/update-member-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMemberShipComponentComponent,
    MembershipDetailComponent,
    AddMemberShipComponent,
    UpdateMemberShipComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
     HttpClientModule,
     FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
