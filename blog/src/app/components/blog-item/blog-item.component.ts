import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input()
  id: number | undefined;
  @Input()
  image: string | undefined;
  @Input()
  text!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
