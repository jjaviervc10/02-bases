import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Batman','Aquaman','Flash','Literna Verde','Wonderwoman','La moles'];
  public deleteHero?: string;

  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();

  }
}
