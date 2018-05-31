import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { PrivateComponent } from './private/private.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
