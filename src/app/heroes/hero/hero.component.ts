import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Wonderwoman';
  public age:  number = 40;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}` ;
  }

  changeHero():void{
   this.name = 'Batman'
  }

  changeAge():void{
    this.age =  25;

  }

  resetForm():void{
    this.name = 'Wonderwoman';
    this.age = 40
  }
}
