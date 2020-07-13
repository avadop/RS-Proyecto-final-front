import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService{
  BASIC_URL: string = "http://localhost:3000/users/"

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.BASIC_URL);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(this.BASIC_URL + id);
  }
}
