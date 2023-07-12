import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SidebarComponent, ContentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
