import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  BASIC_URL = "http://localhost:3000/users/";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.BASIC_URL);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.BASIC_URL + id);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.BASIC_URL, user);
  }

  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(this.BASIC_URL + id);
  }

  updateUser(id: number , user: User): Observable<User> {
    return this.httpClient.put<User>(this.BASIC_URL + id, user);
  }
}
