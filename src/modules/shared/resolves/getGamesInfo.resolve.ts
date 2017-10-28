import { Injectable }                      from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GetGamesServices }                from '../services/getGames.service';

@Injectable()

export class GetGamesResolve implements Resolve<any> {

    constructor(
        private getGamesServices: GetGamesServices
    ){}


  resolve(route: ActivatedRouteSnapshot) {
      return new Promise((resolve, reject) => {
        this.getGamesServices.getGames().subscribe((response: any) => {
            resolve(response);
        });
      })
  }
}