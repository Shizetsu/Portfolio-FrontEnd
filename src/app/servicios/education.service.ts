import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/education/all`)
  }
  public getEduByID(educationId: number):Observable<Education>{
    return this.http.get<Education>(`${this.apiServerUrl}/education/id/${educationId}`);
  }
  public addEducation(education: Education):Observable<Education>{
    return this.http.post<Education>(`${this.apiServerUrl}/education/add`, education);
  }
  public updateEducation(education: Education):Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/education/update`, education);
  }
  public deleteEducation(educationId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/education/delete/${educationId}`);
  }
}
