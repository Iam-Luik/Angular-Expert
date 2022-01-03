import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeComponentComponent } from './pasta/nome-component/nome-component.component';
import { HomeComponent } from './home/home.component';
import { ServicoService } from './servico.service';

@NgModule({
  declarations: [AppComponent, NomeComponentComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ServicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
