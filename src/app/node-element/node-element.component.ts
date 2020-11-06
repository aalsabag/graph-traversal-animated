import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-element',
  templateUrl: './node-element.component.html',
  styleUrls: ['./node-element.component.css']
})
export class NodeElementComponent implements OnInit {
  @Input() label: string;
  @Input() nodeText: string;
  @Input() imageAsset: string;

  constructor() { }

  ngOnInit(): void {
  }

}
