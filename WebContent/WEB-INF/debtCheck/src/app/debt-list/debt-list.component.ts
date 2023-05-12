import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {DebtService} from "../service/debt.service";
import {DebtInfo} from "../model/debt.model";
import {Account} from "../model/account.model";

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.css']
})
export class DebtListComponent implements OnInit {

  listForm: FormGroup;
  accountSelect: boolean;
  selectAccount: string;
  debtInfoList: any = [];
  total: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private debtService: DebtService) { }

  ngOnInit() {
    this.accountSelect = false;
    this.listForm = this.formBuilder.group({
      account: ['']
    });
    this.debtService.getListOfAccounts()
      .subscribe( data => {
        console.log(data);
        this.accountList = data;
      });
  }

  onChange(event: any) {
    this.accountSelect = true;
    this.selectAccount = event.target.value;
    console.log(event.target.value);

    this.debtService.getDebtInfoForAccount(this.selectAccount)
      .subscribe( data => {
        console.log(data);
        this.debtInfoList = data.debtList;
        this.total = data.total;
      });
  }

}
