import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';          // 1) dovendo creare l'utente, importiamo usersService ( la creazione l'abbiamo messa lì)

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  name!:string;                                                        //2) ci occorre una variabile vuota ( mettiamo il ! per dirgli che verrà usata in futuro )

  constructor(private userSrv: UsersService) { }                      //3)

  ngOnInit(): void {
  }

  onNewUser(nome:string){
    if(nome!=undefined && (nome.trim()).length>0){

    this.userSrv.creasteUser(nome);
  }
}
}
