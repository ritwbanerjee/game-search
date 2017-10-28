import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

/**
 * 
 * 
 * @export
 * @class CommonService
 */
@Injectable()

export class HttpService {

    constructor(private _http: Http, private route: Router) {

    }

    /**
     * @name get
     * @description Common gateway method to call all the REST endpoints for get request
     * @augments {url, options}
     * @returns object
     * @memberof CommonService
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Object> {
        return this._http.get(url, options).map((res: Response) => {
            if (res.status === 200) {
                return res.json();
            }else {
                this.route.navigate(['/error', res.status]);
            }
        }).catch(
            (e: any) => Observable.throw(this.route.navigate(['/error/500']))
        );
    }

    /**
     * @name post
     * @description Common gateway method to call all the REST endpoints for post request
     * @augments {url, body, options}
     * @returns object
     * @memberof CommonService
     */
    post(url: string, body: object, options?: RequestOptionsArgs) {
        return this._http.post(url, body, options).map((res: Response) => {
            if (res.status === 200) {
                return res.json();
            }else {
                this.route.navigate(['/error', res.status]);
            }
        }).catch(
            (e: any) => Observable.throw(this.route.navigate(['/error/500']))
        );
    }
}
