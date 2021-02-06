import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  constructor() { }

  @Input() text: String;
  @Input() href: String;


  ngOnInit(): void {
  }

}
