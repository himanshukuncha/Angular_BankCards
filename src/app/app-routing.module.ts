import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsapplyComponent } from './cardsapply/cardsapply.component';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/tabs', pathMatch: 'full' },
  { path: '', component: TabsComponent },
  { path: 'cardsapply', component: CardsapplyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
