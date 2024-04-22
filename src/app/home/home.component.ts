import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ApihelperService } from '../apihelper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Home';
  text = 'This is the home page.';
  posts: any[] = [];
  message: string = 'message from home component';
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private router: Router, private apiService: ApihelperService) {}

  ngOnInit() {
    this.isLoading = true;

    this.apiService.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response: any) => {
        this.posts = response;
        this.isLoading = false;
      },
      (error) => {
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

  onClick() {
    console.log('Button clicked!');
  }

  onNavigate() {
    this.router.navigate(['/about']);
  }
}
