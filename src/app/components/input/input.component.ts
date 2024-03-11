import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  valorItem!: string;
  @Input() itemParaSerEditado!: Item;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(!changes['itemParaSerEditado'].currentValue){
        this.valorItem = this.itemParaSerEditado?.nome;
        console.log(this.valorItem);
      }
  }
}
