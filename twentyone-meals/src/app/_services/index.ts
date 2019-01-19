import { NgModule } from '@angular/core';

import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
import { User } from './user.service';

NgModule({
  imports: [AlertService, AuthenticationService],
  exports: [AlertService, AuthenticationService]
})
export class ModelIndex { };