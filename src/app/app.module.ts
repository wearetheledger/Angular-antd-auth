import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { PrivateComponent } from './private/private.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddComponent, CallbackComponent, PrivateComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    NgReduxModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
