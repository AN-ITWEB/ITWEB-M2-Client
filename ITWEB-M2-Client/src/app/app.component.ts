// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ITWEB-M2-Client';
// }

import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material'
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']})

@Injectable()
export class AppComponent {
  public url: string
  public programs: Program[];
  public app1: Exercise;
  // public dataSource: Exercise[];
  public displayedColumns: String[] = ['Exercise', 'Description', 'Set', 'RepsTime'];

  constructor(private http: HttpClient) {
      // this.http.get<Applications[]>(this.url)
      // this.showConfigResponse();
      
      this.url = 'http://localhost:3000/programs';
      this.http.get<Program[]>(this.url).subscribe(data => {
        console.log(data);
        this.programs = data
      });
  }

  // showConfigResponse() {
  //   this.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // access the body directly, which is typed as `Config`.
  //       this.apps = { ... resp.body };
  //     });
  // }
  // getConfigResponse(): Observable<HttpResponse<Exercise[]>> {
  //   return this.http.get<Exercise[]>(this.url, { observe: 'response' });
  // }

  // getConfig() {
  //   // now returns an Observable of Config
  //   return this.http.get<Applications[]>(this.url)
  // }

}

interface Program {
  owner: string,
  exercises: Exercise[]
}

interface Exercise {
  _id: string;
  Exercise: string;
  Description: string;
  Set: string;
  RepsTime: string;}


  // export class Exercises {
  // exercise: Exercise[];
  // constructor(obj: any) {
  //   this.exercise = obj.category as Exercise[];
  // }
// }
  
  // const ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
  
  /**
   * @title Basic use of `<table mat-table>`
   */
  export class TableBasicExample {
    displayedColumns: string[] = ['Exercise', 'Description', 'Set', 'RepsTime'];
    // dataSource = ELEMENT_DATA;
  }




  