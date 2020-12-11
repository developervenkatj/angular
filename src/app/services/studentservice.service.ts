import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../entity/student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  // allEmployees:Student[] = [
  //   {
  //     "id": "1",
  //     "active": true,
  //     "name": "pavan",
  //     "dateOfBirth": "08/04/1996"
  //   },
  //   {
  //     "id": "2",
  //     "active": true,
  //     "name": "Naresh",
  //     "dateOfBirth": "08/05/1485"
  //   }
  //   ,
  //   {
  //     "id": "3",
  //     "active": false,
  //     "name": "chandu",
  //     "dateOfBirth": "08/04/1896"
  //   }
  //   ,{
  //     "id": "4",
  //     "active": false,
  //     "name": "rajesh",
  //     "dateOfBirth": "08/04/1986"
  //   }
  // ];
  constructor(private http: HttpClient) { }
url="https://deno/land";
   // Returns all the employees
   getAllEmployees():Observable<Object>{
    return this.http.get(this.url+"/enrollees");
  }

  updateEmployee(data:any):Observable<Object>{
    return this.http.put(this.url+"/enrollees/"+data.id,data);
  }

  getEmployee(id: string):Observable<Object>{
    return this.http.get(this.url+"/enrollees/"+id);
  }
}
