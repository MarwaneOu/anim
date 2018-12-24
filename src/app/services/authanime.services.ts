import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthService {
    url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCya8NenjbozAsMbdsTSvRiFfZsyWPBVI8"
    constructor(private http: HttpClient) {

    }
    authentification(): Observable<any> {
        return this.http.post<any>(this.url,
            {
                "email": "shows.Ghoul@email.com",
                "password": "min@!234",
                "returnSecureToken": true
            }
        );
    }
}
