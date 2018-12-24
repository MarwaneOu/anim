import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/getanimes.secvices';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  images
  constructor(private animServices: AnimesService) { }

  ngOnInit() {
    this.animServices.getanimes().subscribe(resul => {
      let at = Object.keys(resul)[0]
      this.images = resul[at].map(function (el) {
        return el.ImageUrl
      });
    })
  }

}
