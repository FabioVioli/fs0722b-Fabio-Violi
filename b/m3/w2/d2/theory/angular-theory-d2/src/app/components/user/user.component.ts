import { Component, OnInit, Input } from '@angular/core';
import { LogService } from 'src/app/services/log.service';          // importiamo sia log che user
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()user:any;
  @Input ()id!: number;

  constructor(private logSrv: LogService, private userSrv: UsersService) { }

  ngOnInit(): void {
  }

  onChangeStatus(newStatus:string){
    this.userSrv.updateUser(this.id, newStatus);
    this.logSrv.logStatusChange(newStatus);
  }

}
