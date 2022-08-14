import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
