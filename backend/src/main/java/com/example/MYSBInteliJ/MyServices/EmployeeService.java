package com.example.MYSBInteliJ.MyServices;

import com.example.MYSBInteliJ.MyEntities.Employee;
import com.example.MYSBInteliJ.Repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.MYSBInteliJ.util.Message;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    Message message;

    public Message Save(Employee employee) {

        try {
            this.employeeRepository.save(employee);
            this.message.setMessage("Data of " + employee.getName() + " has been saved Successfully");
        } catch (Exception e) {
            this.message.setMessage("OOOPPPPsss!!!! " + e.getMessage());
        }
        return message;
    }

    public Page<Employee> getEmployees(Pageable paging) {

        return this.employeeRepository.findAll(paging);

    }

    public Employee getEmployee(int id) {

        return this.employeeRepository.findById(id).get();
    }
    public Message deleteEmployee(int id)
    {
        try
        {
            this.employeeRepository.deleteById(id);
            this.message.setMessage("Employee deleted");
        }
        catch (Exception e)
        {
            this.message.setMessage(e.getMessage());
        }
       return  message;
    }
    public Message updateEmployee(Employee employee,int id)
    {
        try
        {
            Employee emp= this.employeeRepository.findById(id).get();
            emp.setName(employee.getName());
            emp.setAbout(employee.getAbout());
            emp.setAddress(employee.getAddress());
            emp.setFood(employee.getFood());
            emp.setGendor(employee.getGendor());
            emp.setPassword(employee.getPassword());
            emp.setEmail(employee.getEmail());
            this.employeeRepository.save(emp);
            this.message.setMessage("Employee updated");
        }
        catch (Exception e)
        {
            this.message.setMessage(e.getMessage());
        }
        System.out.println(message);
      return  message;
    }
    public List<Employee> searchEmployee(String str)
    {

        return this.employeeRepository.findByNameContaining(str);
    }
}
