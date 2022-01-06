import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";
import { ProdutosService } from "../produtos.service";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[];

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
