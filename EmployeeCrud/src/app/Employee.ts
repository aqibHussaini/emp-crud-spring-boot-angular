export class Employee
{
    public id:number;
    public name:String;
    public email:String;
    public password:String;
    public gendor:String;
    public food:String;
    public address:String;
    public about:String;
  
    constructor(name:String,email:String,password:String,gendor:String,food:String,address:String,about:String)
    {
        this.name=name;
        this.email=email;
        this.password=password;
        this.gendor=gendor;
        this.food=food;
        this.address=address;
        this.about=about;
    }
   
}

export interface content {
    id: number;
    name: string;
    email: string;
    password: string;
    gendor: string;
    food: string;
    address: string;
    about: string;
}

export interface Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort2 {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface RootObject {
    content: content[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    size: number;
    sort: Sort2;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}