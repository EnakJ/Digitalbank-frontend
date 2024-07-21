import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../models/customer.model";
import * as events from "events";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{

  public customers!: Observable<Array<Customer>>
  public errorMessage! : string;
  public keyword: string = "";
  constructor(private customerService: CustomerService) {
  }
  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().pipe(
      catchError(err => {
          this.errorMessage = err.message;
          return throwError(err);
      })
    );
  }

  searchCustomer(keyword: string){

    this.customers = this.customerService.searchCustomer(keyword);
  }

}
