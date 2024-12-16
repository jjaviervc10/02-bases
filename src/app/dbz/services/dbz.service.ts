import { Injectable } from "@angular/core";
import { v4 as uuid}  from 'uuid';
import { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})

   export class DbzService{

    public characters:Character[] = [{
      id: uuid(),
      name: 'Krilin',
      power: 1000

     },{
      id: uuid(),
      name : 'Goku',
      power:9500

     },{
      id: uuid(),
       name: 'Vegeta',
       power: 75500
     }];


    addCharacter(character: Character):void{

      const newCharacter: Character = {   id: uuid(), ...character};


      this.characters.push(newCharacter);
     //this.characters.push(character);

     // console.log(character);
    }

    //onDeleteCharacter(index:number){
     //this.characters.splice(index,1);
      deleteCharacterbyId(id:string){
        this.characters =  this.characters.filter(character => character.id !== id);
      }

    }




