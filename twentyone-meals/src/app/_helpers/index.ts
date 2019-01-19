import { NgModule } from '@angular/core';

import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  imports: [ErrorInterceptor, JwtInterceptor],
  exports: [ErrorInterceptor, JwtInterceptor]
})

export class HelperIndex {};
