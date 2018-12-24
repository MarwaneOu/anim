import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AnimesService {
    token = localStorage.getItem('token')
    url = `https://animescraper.firebaseio.com/DailyShows.json?auth=${this.token}`
    constructor(private http: HttpClient) {
    }
    getanimes(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}
