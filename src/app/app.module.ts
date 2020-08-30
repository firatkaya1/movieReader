import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchComponent } from './shared/components/search/search.component';
import { AdvancedsearchComponent } from './shared/components/advancedsearch/advancedsearch.component';
import { MainComponent } from './shared/components/main/main.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LastsearchComponent } from './shared/components/lastsearch/lastsearch.component';
import { InfoComponent } from './shared/components/info/info.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { MoviewishComponent } from './shared/components/moviewish/moviewish.component';
import { MoviewishlistComponent } from './shared/components/moviewishlist/moviewishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SearchComponent,
    AdvancedsearchComponent,
    MainComponent,
    MovieComponent,
    LastsearchComponent,
    InfoComponent,
    ContactComponent,
    MoviewishComponent,
    MoviewishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
