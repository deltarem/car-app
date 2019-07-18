import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { MatModulesModule } from './mat-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModulesModule,
    FlexLayoutModule.withConfig({addOrientationBps: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
