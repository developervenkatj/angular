import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../entity/student';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  data : any
  allEmployee : any
  constructor(private employeeService:StudentserviceService,private router: Router) { }

  ngOnInit(): void {
   this.employeeService.getAllEmployees()
    .subscribe(data=>{this.allEmployee = data;});
  }


  editEmployee(data: any){
    this.router.navigate(["Edit", data]);
  }
}
