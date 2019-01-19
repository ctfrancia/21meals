import { NgModule } from '@angular/core';

import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

NgModule({
  imports: [UserService, AlertService, AuthenticationService],
  exports: [UserService, AlertService, AuthenticationService],
});
export class ServicesIndex {}
