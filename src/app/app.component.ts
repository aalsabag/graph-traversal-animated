import { Component } from '@angular/core';
import data from '../assets/data/data.json';
import { NodeElement } from './nodeElement'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graph-traversal-animated';

  dataInput: NodeElement[] = data;
  
  constructor() { }

  ngOnInit(): void {

    console.log(data[0].label)
  }

}
