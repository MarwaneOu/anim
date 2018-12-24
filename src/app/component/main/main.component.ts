import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authanime.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.authentification().subscribe(result => {
      localStorage.setItem('token', result.idToken)
      localStorage.setItem('reftoken', result.refreshToken)
    })
  }

}
