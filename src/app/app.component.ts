import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './user';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  user?: User;
  title = 'Money tracking';
  ngOnInit(): void {
    this.http.get(environment.serverUrl + '/users/1').subscribe((Response) => {
      this.user = Response as User;
    });
  }
}
