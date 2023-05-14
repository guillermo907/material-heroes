import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiEndpoint =
    'https://randomuser.me/api/?results=15&inc=name,email,picture';

  constructor(private http: HttpClient) {}

  users?: User[];

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiEndpoint);
  }
  setUsers(): void {}
}
