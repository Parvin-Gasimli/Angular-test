import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApihelperService } from './apihelper.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApihelperService],
})
export class AppComponent {
  title = 'hello world';
}
