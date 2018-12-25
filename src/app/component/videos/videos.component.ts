import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/getanimes.secvices';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videoUrl: string
  idVideo: string
  constructor(private _animes: AnimesService, private route: ActivatedRoute) {
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.idVideo = params.id
        console.log('id', params.id)
        return this._animes.getObserAnimes()
      }
      )
    ).subscribe(result => {
      let id = this.idVideo
      let video = result[Object.keys(result)[0]].find(function (element) {
        return element.Id === id
      })
      this.videoUrl = video.VideoMp4HDUrl
    })
  }

  ngOnInit() {

  }

}
