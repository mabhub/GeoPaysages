import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/authinterceptor';
import { LoginService } from './services/lgoin.service';
import { LoginPageComponent } from './login-page/login-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InputFeedBackDirective } from './shared/input-feed-back.directive';
import { HeaderComponent } from './header/header.component';
import { FormErrorComponent } from './shared/form-error.component';
import { ManageSitesComponent } from './manage-sites/manage-sites.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HomePageComponent } from './home-page/home-page.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { SitesService } from './services/sites.service';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputFeedBackDirective,
    HeaderComponent,
    FormErrorComponent,
    ManageSitesComponent,
    HomePageComponent,
    AddSiteComponent,
    AddPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    NgxDatatableModule,
    NgSelectModule,
  ],
  providers: [
    LoginService,
    SitesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
