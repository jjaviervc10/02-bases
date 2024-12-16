import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
 standalone: false,
 // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
 public onDelete: EventEmitter<string> =  new EventEmitter();


  onDeleteCharacter(id: string): void{

   // console.log({index})
   this.onDelete.emit(id);
  }


}
