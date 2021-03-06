import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { MenuComponent } from "./navegacao/menu/menu.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { APP_BASE_HREF } from "@angular/common";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { FormsModule } from "@angular/forms";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { ProdutosService } from "./produtos/produtos.service";
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [
    ProdutosService,
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
