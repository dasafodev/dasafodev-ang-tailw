import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-article',
  templateUrl: './work-article.component.html',
  styleUrls: ['./work-article.component.css']
})
export class WorkArticleComponent implements OnInit {

  constructor() { }

  @Input() text: String;
  @Input() title: String;
  @Input() image: String;



  ngOnInit(): void {
  }

}
