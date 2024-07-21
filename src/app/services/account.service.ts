import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDetails} from "../models/AccountDetails";

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnInit{
  private urlapi: string = "http://localhost:8085";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchAccountDetails(accountId: string, currentPage: number, size: number):Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.urlapi}/accounts/${accountId}/pageOperation?page=${currentPage}&size=${size}`);
  }
}
