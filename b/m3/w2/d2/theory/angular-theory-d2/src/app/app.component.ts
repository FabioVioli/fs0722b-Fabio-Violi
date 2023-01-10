import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'angular-theory-d2';

  users = this.userSrv.users;
  constructor(private userSrv: UsersService){

  }
}
