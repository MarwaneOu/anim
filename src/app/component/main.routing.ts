import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [{
    path: '',
    component: ContainerComponent
}, {
    path: 'video/:id', component: VideosComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }