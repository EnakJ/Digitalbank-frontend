import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../models/customer.model";
import {json} from "express";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit{
  public customerFormGroup!: FormGroup;
  public savedCustomer:any = null;
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder,private router: Router) {
  }
  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      prenom: this.formBuilder.control(null, [Validators.required, Validators.min(4)]),
      nom: this.formBuilder.control(null, [Validators.required, Validators.min(3 )]),
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      naissance: this.formBuilder.control(null, [Validators.required])
    });
  }

  saveCustomer() {
    const customer: Customer = this.customerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next: data => {
        this.savedCustomer = data;
        alert(`Customer ${data.prenom} ${data.nom} is saved successfully !`);
      }, error: err => {
        console.log(err);
      }
    });
    this.customerFormGroup.reset();
    this.router.navigateByUrl("/customers");
  }
}
