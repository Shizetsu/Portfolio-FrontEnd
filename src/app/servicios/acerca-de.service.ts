import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser():Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/id/1`);
  }
  public updateUser(user: User):Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  }
}
