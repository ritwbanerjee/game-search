import { Injectable }           from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';

@Injectable()

export class GetGamesServices {

    constructor(
        private httpService: HttpService
    ){}

    getGames() {
        let url = 'http://starlord.hackerearth.com/gamesarena';
        let observable = new Observable(observer => {
            this.httpService.get(url).subscribe((response: any) => {
                response.splice(0,1);
                observer.next(response);
            });
        });
        return observable;
    }

}