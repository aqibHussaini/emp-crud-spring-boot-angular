import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../Employee';
import { content } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public ELEMENT_DATA: content[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'gendor', 'food', 'address', 'about'];
  page: Array<any>;
  emps: any;
  query:String;
  pages: Array<any>;
  pageSizeOptions: number[] = [1, 2, 3, 4];
  employees:any;
  public dataSource = new MatTableDataSource<content>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private service: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees(0);
  }
  getEmployees(i) {
    let res = this.service.getEmployees(i);
    res.subscribe(d => {

      console.log(d['content']);
      this.dataSource.data=d['content'];
      // this.ELEMENT_DATA = d['content'];
      this.emps = d['content'];
      this.pages = new Array(d['totalPages']);
      console.log('this.dataSource.data'+this.dataSource);
      console.log(this.pages);

    });
  }
  search(){
console.log(this.query);
this.service.search(this.query).subscribe(d=>{
  this.employees=d;
});
  }
  delete(id) {
    this.service.delete(id);
  }
  update(id) {
    this.router.navigate(['app-update-employee', id]);
  }
  getPage(i)
  {
this.getEmployees(i);
  }
}

