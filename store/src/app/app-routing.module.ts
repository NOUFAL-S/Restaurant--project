import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { NewStoreComponent } from './new-store/new-store.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path: '',
    component: StoreListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactusComponent,
    canActivate: [AuthGuard],
  },
 
  {
    path: 'map',
    component: MapComponent,
     canActivate:[AuthGuard]
  },

  {
    path: 'top',
    component: HomeComponent,
     canActivate:[AuthGuard]
  },
  {
    path: 'add',
    component: NewStoreComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'edit',
    component: EditStoreComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
