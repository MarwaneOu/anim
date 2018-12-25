import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main.routing';
import { CardComponent } from './container/component/card/card.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
    declarations: [
        ContainerComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        NgbModule.forRoot(),
        HttpClientModule,
        MainRoutingModule
    ],
    providers: []
})
export class MainModule { }
