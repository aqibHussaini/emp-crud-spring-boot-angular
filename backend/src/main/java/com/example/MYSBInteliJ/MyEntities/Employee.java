package com.example.MYSBInteliJ.MyEntities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String password;
    private String gendor;
    private String food;
    private String address;
    private String about;

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", gendor='" + gendor + '\'' +
                ", food='" + food + '\'' +
                ", address='" + address + '\'' +
                ", about='" + about + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGendor() {
        return gendor;
    }

    public void setGendor(String gendor) {
        this.gendor = gendor;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }


    public Employee() {
    }

    public Employee(String name, String email, String password, String gendor, String food, String address, String about) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.gendor = gendor;
        this.food = food;
        this.address = address;
        this.about = about;
    }

    public Employee(int id, String name, String email, String password, String gendor, String food, String address, String about) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.gendor = gendor;
        this.food = food;
        this.address = address;
        this.about = about;
    }
}
