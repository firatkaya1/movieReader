import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { LastviewComponent } from './shared/components/lastview/lastview.component';
import { AboutusComponent } from './shared/components/aboutus/aboutus.component';
import { ApiComponent } from './shared/components/api/api.component';
import { DocumentComponent } from './document/document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    MoviewishlistComponent,
    LastviewComponent,
    AboutusComponent,
    ApiComponent,
    DocumentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
