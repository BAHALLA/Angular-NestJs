import { NgModule } from '@angular/core';

import {AuthService} from './auth.service';
import {AuthGarde} from './auth.garde';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    FormsModule
  ],
  providers: [AuthService, AuthGarde]
})
export class AuthModule { }

