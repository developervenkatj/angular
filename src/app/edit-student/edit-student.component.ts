import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../services/studentservice.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
id :any;
data :any;
 
  constructor(private employeeService:StudentserviceService,private router: Router,private route :ActivatedRoute) { 
   this.id =this.route.snapshot.paramMap.get('id') ;
    
  }

  ngOnInit(): void {
  this.data= this.employeeService.getEmployee(this.id).subscribe(
    data=>{this.data= data;}
  );
  }

  updatedate(){
    this.employeeService.updateEmployee(this.data).subscribe(
      data=>{this.data = data;}
    );
  }
nameChanged(name:any){
  this.data.name = name;
}
statusChanged(status:any){
  this.data.active = status;
}
  home(){
    this.router.navigate(["dashboard"]);
  }
}
