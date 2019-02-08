import { Component, OnInit } from '@angular/core';
//call the interface here - if using angular 4 -
import  { Portfolios } from './Porfolis'; //call that Porfolio Interface

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // person: {
  //   id: number,
  //   name: string,
  //   address: string,
  //   skills: any[],
  //   age: number
  // }
  person : Persons; //this person will take the info from the interface.
  persons : Persons[]; //means I can create an array of that Persons
  porfolio : Portfolios[]; //call Porfoloios Interface here
  constructor() { 
    this.person = {id: 0, name : 'salah bedeiwi', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 30};
    this.persons = [
      {id: 1, name : 'salah bedeiwi', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 30},
      {id: 2, name : 'Tan Tuohy', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 25},
      {id: 3, name : 'Mohammed', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 33},
      {id: 4, name : 'Ahmed E.', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 18}
    ];
    this.porfolio = [
      {id: 2, name : 'Tan Tuohy', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 25},
      {id: 1, name : 'salah bedeiwi', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 30},
      {id: 3, name : 'Mohammed', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 33},
      {id: 4, name : 'Ahmed E.', address: '361 81st Ave NE', skills: ['PHP', 'Angular 4'], age: 18}
    ];
  }

  ngOnInit() {
  }

}

//outside the class: create an interface here or call it from a different file like Porfolios.ts - external interface
interface Persons {
    id: number,
    name: string,
    address: string,
    skills: any[],
    age: number
}