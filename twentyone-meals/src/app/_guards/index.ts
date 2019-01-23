import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';


@NgModule({
  imports:[AuthGuard],
  exports:[AuthGuard]
})
export class AuthGuardIndex {}