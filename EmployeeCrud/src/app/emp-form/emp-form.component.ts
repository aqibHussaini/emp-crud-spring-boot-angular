import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  public obj:Employee;
  public response:any;
  constructor(private service:EmployeeService,private router: Router) { 
    this.obj=new Employee("","","","","","","");
   
  }

  ngOnInit(): void {
  }
  public saveEmployee(){
    // console.log(this.obj);
    this.service.save(this.obj).subscribe(d=>{
      this.response=d;
      console.log(d);
    });
  
    // console.log(this.response.message);
    setTimeout(()=>this.router.navigate(['/app-employee-list']),1000);

  
  }
 
  
}
