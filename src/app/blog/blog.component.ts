import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApihelperService } from '../apihelper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  title = 'Blog';
  text = 'This is the blog page.';
  posts: any[] = []
  constructor(private route:Router,private service:ApihelperService){}

  ngOnInit(): void {
    this.service.get("https://jsonplaceholder.typicode.com/posts").subscribe((response:any) => {
      this.posts = response;
    });
  }


}
