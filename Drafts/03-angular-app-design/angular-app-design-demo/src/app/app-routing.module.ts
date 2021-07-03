import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesDisplayComponent } from './attendees-display/attendees-display.component';
import { TenantIDFilterComponent } from './tenant-idfilter/tenant-idfilter.component';

const routes: Routes = [
  { path: 'tenant/:tenantId', component: TenantIDFilterComponent, children: 
    [
      { path: 'attendees', component: AttendeesDisplayComponent }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
