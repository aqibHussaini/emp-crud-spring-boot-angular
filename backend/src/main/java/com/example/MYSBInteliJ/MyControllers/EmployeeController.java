package com.example.MYSBInteliJ.MyControllers;

import com.example.MYSBInteliJ.MyEntities.Employee;
import com.example.MYSBInteliJ.MyServices.EmployeeService;
import com.example.MYSBInteliJ.util.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;
    @RequestMapping(value = "/save-employee",method = RequestMethod.POST)
    @CrossOrigin
    public Message saveEmployee(@RequestBody Employee employee)
    {
        Message message=null;
        try
        {
             message=this.employeeService.Save(employee);

        }
       catch (Exception e)
       {
           message.setMessage(e.getMessage());
       }
        System.out.println(message);
        return message;
    }
    @GetMapping ("/get-employees/{pageNo}")
    @CrossOrigin
    public ResponseEntity<Page<Employee>> getEmployees(@PathVariable int pageNo)
    {
        Pageable paging = PageRequest.of(pageNo, 5);
     return new ResponseEntity<Page<Employee>>(this.employeeService.getEmployees(paging),HttpStatus.OK) ;
    }
    @GetMapping ("/get-employee/{id}")
    @CrossOrigin
    public Employee getEmployee(@PathVariable int id)
    {
        return this.employeeService.getEmployee(id);
    }
    @GetMapping ("/search-employee/{str}")
    @CrossOrigin
    public List<Employee> searchEmployee(@PathVariable String str)
    {
        return this.employeeService.searchEmployee(str);
    }
    @DeleteMapping ("/delete-employee/{id}")
    @CrossOrigin
    public Message deleteEmployee(@PathVariable int id)
    {
        return this.employeeService.deleteEmployee(id);
    }
    @PutMapping("/update-employee/{id}")
    @CrossOrigin
    public Message updateEmployee(@RequestBody Employee employee,@PathVariable int id)
    {
        return  this.employeeService.updateEmployee(employee,id);
    }
}
