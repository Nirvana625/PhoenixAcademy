import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User,Reg,Log } from './user';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  api_log="https://nodeprojectapi.herokuapp.com/login";
  api_reg="https://nodeprojectapi.herokuapp.com/register";
  api_url="https://jsonplaceholder.typicode.com/users";
  token:string=null;

  constructor(private http:HttpClient, private auth:StorageService) { 
    this.token=this.auth.getToken();
    console.log("received token",this.token);
   }

  getData():Observable<User[]>
  {
    return this.http.get<User[]>(this.api_url,
      {
      headers:new HttpHeaders({'Authorization':this.token})
   })
    .pipe(catchError(this.errorHandler));
    
  }
  getDetails(id):Observable<User[]>
  {
    return this.http.get<User[]>(`${this.api_url}/${id}`);
  }
  formData(formValue):Observable<User[]>
  {
    return this.http.post<User[]>(this.api_url,formValue);
  }

  regData(formValue):Observable<Reg[]>
  {
    return this.http.post<Reg[]>(this.api_reg,formValue);
  }
  logData(formValue):Observable<Log[]>
  {
    return this.http.post<Reg[]>(this.api_log,formValue)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

 
  
}
