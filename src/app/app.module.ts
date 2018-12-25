import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/authanime.services';
import { AnimesService } from './services/getanimes.secvices';
import { MainModule } from './component/main.modul';
import { VideosComponent } from './component/videos/videos.component';
import { SafePipe } from './pipes/safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    VideosComponent, SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MainModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService, AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
