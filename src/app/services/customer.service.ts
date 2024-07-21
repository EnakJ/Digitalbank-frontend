import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit{
   private urlapi: string = "http://localhost:8085";
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.urlapi+'/customers');
  }

  searchCustomer(keyword: string):Observable< Array<Customer>>{
    return this.http.get<Customer[]>(this.urlapi+`/customers/search?keyword=${keyword}`);
  }


  saveCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>(this.urlapi+'/customers', customer);
  }
}
