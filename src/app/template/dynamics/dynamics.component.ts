import { Component, OnInit } from '@angular/core';

interface Person
{
  name: string;
  favorites:  Favorite[]
}

interface Favorite{
   id: number;
   name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent {

  favorite:string = '';

  person: Person = {
    name: 'Marlon',
    favorites: [
      {
        id: 1,
        name: 'Fav 1'
      },
      {
        id: 2,
        name: 'Fav 2'
      }
    ]
  }


  save() {
    console.log('Formulario posteado');
  }

  isValidName() {

  }

  remove(position: number): void {
    this.person.favorites.splice(position, 1);
  }

  add() {
    const favorite: Favorite = {
      id: this.person.favorites.length+1,
      name: this.favorite
    }
    this.person.favorites.push({...favorite});
  }
}
