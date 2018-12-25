import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AnimesService {
    token = localStorage.getItem('token')
    animes: Observable<any>
    url = `https://animescraper.firebaseio.com/DailyShows.json?auth=${this.token}`
    constructor(private http: HttpClient) {
    }
    getanimes(): Observable<any> {
        let observable = this.http.get<any>(this.url)
        this.animes = Object.assign(observable)
        return observable
    }
    getObserAnimes(): Observable<any> {
        return this.animes
    }
}
