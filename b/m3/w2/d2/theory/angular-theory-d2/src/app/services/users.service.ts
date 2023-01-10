import { User } from "../models/user.interface";      // 1) importiamo User

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users: User[] = [];                               // 2) Aggiungiamo alla classe user, che deve essere un array

  constructor() {                                   // 3) creazione utente deve far si che venga pushato nell'array users il nome dell'utente.

  }

  creasteUser(nome:string){                       // 4) creiamo un metodo per pushare l'user
    this.users.push({
      nome,
      stato: "occupato"                          // 5) le graffe sono poiché pushamo un oggetto. lo stato è necessario perché dobbiamo pushare quello all'inizio
    })
    console.log(this.users)

}
  updateUser(index:number, newStatus:string){   // 6)
    this.users[index].stato = newStatus;
  }

}
