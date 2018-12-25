import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('anime') _anime;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('images', this._anime)
  }
  watch(id) {
    this.router.navigate([`video/${id}`])
  }

}
