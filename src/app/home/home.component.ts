import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ModalService } from '../_services';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private modalExerciseText: string;
  private modalDescriptionText: string;
  private modalSetText: string;
  private modalRepsTimeText: string;
  public url: string
  public programs: Program[];
  public displayedColumns: String[] = ['Exercise', 'Description', 'Set', 'RepsTime'];
  private currentProgramId: string;
  private owner: Owner;

  constructor(private modalService: ModalService, private http: HttpClient, private socialAuthService: AuthService) {
  }

  ngOnInit() {
    // this.url = process.env.NODE_ENV !== "development" ? "https://itweb-m2-api.herokuapp.com/programs" : 'http://localhost:3000/programs';
    this.url = 'http://localhost:3000/programs';

    this.http.get<Program[]>(this.url).subscribe(data => {
      console.log(data);
      this.programs = data
    });

    this.owner = {
      id: "",
      Name: "",
      token: ""
    };
  }

  openModal(obj: modalObj) {
      this.currentProgramId = obj.programId;
      this.modalService.open(obj.id);
  }
  openModalBasic(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
      this.resetModalTexts();
  }

  addExerciseModal(id: string) {
    let exercise: Exercise 
    exercise = {id: "", Exercise: this.modalExerciseText, Description: this.modalDescriptionText, Set: this.modalSetText, RepsTime: this.modalRepsTimeText, Logged: false}
    var obj = {programId: this.currentProgramId, exercise}

    this.http.post<Program>(this.url + '/AddExercise',obj, this.generateHttpHeaders()).subscribe(
      data => {
        for (let i = 0; i < this.programs.length; i++) {
          var program = this.programs[i];
          if(program._id == this.currentProgramId){
            this.programs[i] = data
          }
        }
        console.log(data)},
      error => {
        console.log('Error: ', error)
        this.openModalBasic('no-access-modal') 
      }
    );  

      this.modalService.close(id);
      this.resetModalTexts();
  }

  toggleClicked(programId, exerciseId, i, j){
    var Logged = !this.programs[i].Exercises[j].Logged
    var obj = {Logged, programId, exerciseId}

    this.http.patch(this.url + '/UpdateLogged', obj, this.generateHttpHeaders()).subscribe(
      data => {
        console.log("Patched Logged info", data)
      },
      error => { 
        console.log('Error: ', error)
        // this.openModalBasic('no-access-modal')
        // this.programs[i].Exercises[j].Logged = !this.programs[i].Exercises[j].Logged
      }
    );
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.owner = {
          id: userData.id,
          Name: userData.name,
          token: userData.idToken
        };
      }
    );
  }

  private generateHttpHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
       'Authorization': this.owner.token
      })
    };
  }

  private resetModalTexts(){
    this.modalExerciseText = "";
    this.modalDescriptionText = "";
    this.modalSetText = "";
    this.modalRepsTimeText = "";
  }

  removeProgram($event, programId)
  {
    console.log("Trying to remove program: ",programId);
    
    this.http.delete(this.url + '/' + programId, this.generateHttpHeaders()).subscribe(
      data => {
      console.log("Removed program: ",data);
      this.programs = this.programs.filter(program => program._id !== programId)
      },
      error => {
        console.log('Error: ', error)
        this.openModalBasic('no-access-modal') 
      }
    );
  }

  createProgram(){
    if(!this.checkIfLoggedIn()) return;

    var obj = {Owner: this.owner, Exercises: []}

    this.http.post<Program>(this.url + '/',obj, this.generateHttpHeaders()).subscribe(
      data => {
        console.log(data);
        this.programs.push(data)},
      error => {
        console.log('Error: ', error)
        this.openModalBasic('no-access-modal') 
      }  
    );
  }

  removeExercise($event, programId, exerciseId)
  {
    console.log("Trying to remove exercise with programId: ", programId, " And ExerciseID: ", exerciseId);
    var obj = {programId, exerciseId}
    this.http.post(this.url + '/RemoveExercise',obj, this.generateHttpHeaders()).subscribe(
      data => {
        console.log(data)
        this.removeExerciseFromModel(programId, exerciseId)
      },
      error => {
          console.log('Error: ', error)
          this.openModalBasic('no-access-modal') 
      });
  }

  removeExerciseFromModel(programId, exerciseId){
    for (let i = 0; i < this.programs.length; i++) {
      var program = this.programs[i];
      if(program._id == programId){
        for (let j = 0; j < program.Exercises.length; j++) {
          
          if(program.Exercises[j].id == exerciseId){
            this.programs[i].Exercises.splice(j,1)
          }
        }
      }
    }
  }

  checkIfLoggedIn(){
    if(this.owner == null){
      this.openModalBasic("not-logged-in-modal")
      return false
    }
    return true  
  }
}



interface modalObj{
    id: string,
    programId: string
}

interface Program {
  _id: string
  owner: Owner,
  Exercises: Exercise[]
}

interface Exercise {
  id: string;
  Exercise: string;
  Description: string;
  Set: string;
  RepsTime: string;
  Logged: boolean
} 

interface Owner {
  id: string,
  Name: string,
  token: string
}