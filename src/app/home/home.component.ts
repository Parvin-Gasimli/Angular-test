import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApihelperService } from '../apihelper.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',


})
export class HomeComponent implements OnInit {
  title = 'Home';
  text = 'This is the home page.';
  posts: any[] = []
  message: string = 'message from home component';
  constructor(
    private router: Router,
    private apiService: ApihelperService,
  ) { 
      
  }

  ngOnInit() {
    const response=this.apiService.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.posts = data; 
    });
    return response;
  }

  onClick() {
    console.log('Button clicked!');
  }

  onNavigate() {
  this.router.navigate(['/about']);
  }

  
  
}
