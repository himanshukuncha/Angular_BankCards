import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './tabs/card/card.component';
import { CreditcardComponent } from './tabs/creditcard/creditcard.component';
import { DebitcardComponent } from './tabs/debitcard/debitcard.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CardsapplyComponent } from './cardsapply/cardsapply.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';




// onMounted(() => {
//   initFlowbite();
// });
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TabsComponent,
    HeaderComponent,
    CardComponent,
    CreditcardComponent,
    DebitcardComponent,
    CardsapplyComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
