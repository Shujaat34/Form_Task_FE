import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {}
  private baseUrl = environment.localBaseUrl;

  public getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/get/all`);
  }

  public addPerson(quiz: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/add`, quiz);
  }


  public getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/get/${id}`);
  }

  public updateQuiz(quiz: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/update`, quiz);
  }

}
