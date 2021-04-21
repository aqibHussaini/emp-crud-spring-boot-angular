import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../Employee';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
public id:number;
public obj;

  constructor(private route:ActivatedRoute,private service:EmployeeService,public r:Router) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
this.service.getEmployee(this.id).subscribe(d=>{
  console.log(d);
  this.obj=d;

});
  }
  updateEmployee(){
    console.log(this.obj);
    this.service.update(this.obj).subscribe(d=>{
      console.log(d);
    });
    setTimeout(()=>this.r.navigate(['/app-employee-list']),1000);
  }
}
