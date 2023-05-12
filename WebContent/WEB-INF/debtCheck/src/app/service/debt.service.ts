import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class DebtService {
  constructor(private http: HttpClient) { }
  //baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  accountListURL: string = 'http://localhost:8080/accountlist';
  debtInfoListURL: string = 'http://localhost:8080/debtinfolist';

  getDebtInfoForAccount(id: string) {
    // fake data - start
    const debtInfoObservable = new Observable(observer => {
                setTimeout(() => {
                    let debtInfoList = [];
                    if(id == "00076834583919") {
                      debtInfoList = {debtList:[{accountID: "00076834583919", dateOfTransaction:"05-12-2018", "amount": "1,250"},
                                      {accountID: "00076834583919", dateOfTransaction:"07-12-2018", "amount": "2,200"},
                                      {accountID: "00076834583919", dateOfTransaction:"12-12-2018", "amount": "4,000"},
                                      {accountID: "00076834583919", dateOfTransaction:"14-12-2018", "amount": "30,000"}], total:"37,450"};
                    } else if(id == "00015485958556") {
                      console.log('sdfsdf');
                      debtInfoList = {debtList: [{accountID: "00015485958556", dateOfTransaction:"02-12-2018", "amount": "1,000"},
                                      {accountID: "00015485958556", dateOfTransaction:"09-12-2018", "amount": "100"},
                                      {accountID: "00015485958556", dateOfTransaction:"11-12-2018", "amount": "10,00,000"},
                                      {accountID: "00015485958556", dateOfTransaction:"13-12-2018", "amount": "3,500"}], total:"10,04,600"};
                    }
                    observer.next(debtInfoList);
                }, 1000);
   });
   return debtInfoObservable;
   // fake data - end
   //return this.http.get<DebtInfo[]>(this.debtInfoListURL+ '/' + id);
  }

  getListOfAccounts() {
    // fake data - start
    let fakeAccounts = [{accountID:"00076834583919", bankName:"HDFC Bank"}, {accountID:"00015485958556", bankName:"ICICI Bank"}];
    const accounts = new Observable(observer => {
                setTimeout(() => {
                    observer.next(fakeAccounts);
                }, 2000);
   });
   return accounts;
   // fake data - end
    /*return this.http.get<Account[]>(this.accountListURL);*/
  }
}
