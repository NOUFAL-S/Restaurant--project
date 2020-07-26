import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { NewStoreComponent } from './new-store/new-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth.guard';
const routes: Routes =
 [
  {
     path:"",
     component:StoreListComponent,  
       canActivate:[AuthGuard]
  },
  {
    path:'add',
    component:NewStoreComponent,
     canActivate:[AuthGuard]
  },

  {   
     path:'edit',
     component:EditStoreComponent
  },
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
