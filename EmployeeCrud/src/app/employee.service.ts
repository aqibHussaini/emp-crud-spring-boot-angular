import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }
  save(obj){
    // console.log(obj.name);
    // console.log(obj.email);
    // console.log(obj.password);
    // console.log(obj.gendor);
    // console.log(obj.address);
    // console.log(obj.about);
    console.log('hi in service');
   return this.http.post("http://localhost:8080/save-employee", obj);
  }
  getEmployees(i:number){
    
   return  this.http.get("http://localhost:8080/get-employees/"+i);
   }
   getEmployee(id){
    return this.http.get("http://localhost:8080/get-employee/"+id);
   }
   delete(id)
   {
    return this.http.delete("http://localhost:8080/delete-employees/"+id); 
   }
   update(obj)
   {
    return this.http.put("http://localhost:8080/update-employee/"+obj.id,obj); 
   }
   search(str)
   {
    return this.http.get("http://localhost:8080/search-employee/"+str);
   }
}
