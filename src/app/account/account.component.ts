import {Component, OnInit} from '@angular/core';
import {AccountService} from "../services/account.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountDetails} from "../models/AccountDetails";
import {Observable} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  public accountFormGroup!: FormGroup;
  public accountDetailsObservable!: Observable<AccountDetails>;
  public currentPage: number = 0;
  public size: number = 5;

  constructor(private accountService: AccountService, private accountBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.accountFormGroup = this.accountBuilder.group({
      accountId: this.accountBuilder.control('')
    });
  }
  searcheAccount() {
    let accountId = this.accountFormGroup.value.accountId;
   this.accountDetailsObservable = this.accountService.searchAccountDetails(accountId, this.currentPage, this.size);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.searcheAccount();
  }
}
