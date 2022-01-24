import { Component, OnInit } from '@angular/core';

interface MenuItem
{
   text: string;
   route: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
    text: 'basics',
    route: './template/basics'
    },
    {
      text: 'dynamics',
      route: './template/dynamics'
    },
    {
      text: 'switches',
      route: './template/switches'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'basics',
      route: './reactive/basics'
    },
    {
      text: 'dynamics',
      route: './reactive/dynamics'
    },
    {
      text: 'switches',
      route: './reactive/switches'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
