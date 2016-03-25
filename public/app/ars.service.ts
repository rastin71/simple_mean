import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Score} from './ars.score';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ArsService {

    constructor(private http:Http) { }

    getArts() {
       return Observable.forkJoin(
           this.http.get('./app/ars.data.json').map((res:Response) => res.json()));
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}