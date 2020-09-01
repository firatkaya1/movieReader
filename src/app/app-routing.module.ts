import { ApiComponent } from './shared/components/api/api.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutusComponent } from './shared/components/aboutus/aboutus.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import { MoviewishlistComponent } from './shared/components/moviewishlist/moviewishlist.component';
import { MoviewishComponent } from './shared/components/moviewish/moviewish.component';
import { AdvancedsearchComponent } from './shared/components/advancedsearch/advancedsearch.component';
import { SearchComponent } from './shared/components/search/search.component';
import { MainComponent } from './shared/components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'search',component:SearchComponent},
  {path:'search/advanced',component:AdvancedsearchComponent},
  {path:'movie',component:MovieComponent},
  {path:'movie/wish',component:MoviewishComponent},
  {path:'movie/wish/list',component:MoviewishlistComponent},
  {path:'me/about',component:AboutusComponent},
  {path:'me/contact',component:ContactComponent},
  {path:'me/api',component:ApiComponent},
  {path:'me/api/document',component:ApiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
