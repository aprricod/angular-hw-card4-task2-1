import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  // user1 = { name: 'Artem', age: 32 };
  // user2 = { name: 'Natalia', age: 22 };
  // user3 = { name: 'Alice', age: 42 };
  // users = { name: ['Artem', 'Natalia', 'Alice'], age: [32, 22, 42] };
  userName = ['Artem', 'Natalia', 'Alice'];
  // userAge = [32, 22, 42];
  searchStr = '';

  // userName = ['Artem', 'Natalia', 'Alice'];
  // userAge = [32, 22, 42];

  constructor() {}

  ngOnInit(): void {}
}
