import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  public educations:Education[]=[];
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;
  


  constructor(private educationService:EducationService) { } 

  ngOnInit(): void {
    this.getEducations();
  }
  

  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next:(Response: Education[]) => {
        this.educations = Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  /*
  public onOpenModal(mode:String, education?: Education): void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target','#addEducationModal');
    }else if(mode==='delete'){
      this.deleteEducation=education;
      button.setAttribute('data-bs-target','#deleteEducationModal');
    }
    else if(mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-bs-target', '#editEducationModal');
      console.log("It works!")
    }
    container?.appendChild(button);
    button.click();
    console.log("It works")


  }
  */
 /*
  public onOpenModal(mode: String, education?: Education): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    let modalTarget: '';
    if (mode === 'add') {
      modalTarget = '#addEducationModal';
    } else if (mode === 'delete') {
      this.deleteEducation = education;
      modalTarget = '#deleteEducationModal';
    } else if (mode === 'edit') {
      this.editEducation = education;
      modalTarget = '#editEducationModal';
      console.log('It works!');
    }
    button.setAttribute('data-bs-target', modalTarget);
    if (container) {
      container.appendChild(button);
      button.click();
      console.log('It works');
    }
  } */
  /*
  public onOpenModal(mode: string, education?: Education): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    let modalTarget: string;
    if (mode === 'add') {
      modalTarget = '#addEducationModal';
    } else if (mode === 'delete') {
      this.deleteEducation = education;
      modalTarget = '#deleteEducationModal';
    } else if (mode === 'edit') {
      this.editEducation = education;
      modalTarget = '#editEducationModal';
      console.log("It works!")
    }
    if (modalTarget) {
      button.setAttribute('data-bs-target', modalTarget);
      container?.appendChild(button);
      button.click();
    }
    console.log("It works")
  }
  */
 
  public onOpenModal(mode: string, education?: Education): void {
    let modalTarget = '';
    if (mode === 'add') {
        modalTarget = '#addEducationModal';
        console.log("Works!")
    } else if (mode === 'delete') {
        this.deleteEducation = education;
        modalTarget = '#deleteEducationModal';
    } else if (mode === 'edit') {
        this.editEducation = education;
        modalTarget = '#editEducationModal';
        console.log("Im here!")
    }

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', modalTarget);
    container?.appendChild(button);
    button.click();
    console.log("It works");
}

  



  public onAddEducation(addForm: NgForm){
    document.getElementById('add-education-form')?.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next: (Response:Education) => {
        console.log(Response);
        this.getEducations();
        addForm.reset();
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }
  /*
  public onUpdateEducation(education: Education){
    this.editEducation=education;
    document.getElementById('add-education-form')?.click();
    this.educationService.updateEducation(education).subscribe({
      next: (Response:Education) => {
        console.log(Response);
        this.getEducations();
        
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  */
  
 
  public onUpdateEducation(education: Education){
    this.editEducation=education;
    document.getElementById('editEducationModal')!.style.display = "block";
    this.educationService.updateEducation(education).subscribe({
      next: (Response:Education) => {
        console.log(Response);
        this.getEducations();
        
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


/*
public onUpdateEducation(education: Education){
  if (this.editEducation) {
  this.editEducation=education;}
  document.getElementById('editEducationModal')!.style.display = "block";
  this.educationService.updateEducation(education).subscribe({
    next: (Response:Education) => {
      console.log(Response);
      this.getEducations();
      
    },
    error:(error:HttpErrorResponse) => {
      alert(error.message);
    }
  })
}
*/





  public onDeleteEducation(idEdu: number):void{
    console.log(idEdu)
    document.getElementById('add-education-form')?.click();
    this.educationService.deleteEducation(idEdu).subscribe({
      next: (Response:void) => {
        console.log(Response);
        this.getEducations();
        console.log(idEdu)
        
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


  modalesquere!: Modal;

  openModal() {
    var modalesquere = document.getElementById('addEducationModal');
    if (modalesquere) {
      this.modalesquere = new Modal(modalesquere, {
        keyboard: false
      });

    }
    this.modalesquere?.show();
  }
  
  openModalEdit() {
    var modalesquere = document.getElementById('editEducationModal');
    if (modalesquere) {
      console.log("executes")
      this.modalesquere = new Modal(modalesquere, {
        keyboard: false
      });
      

    }
    this.modalesquere?.show();
    console.log("Shows")
  }  

  openDeleteModal() {
    var modalesquere = document.getElementById('deleteEducationModal');
    if (modalesquere) {
      this.modalesquere = new Modal(modalesquere, {
        keyboard: false
      });

    }
    this.modalesquere?.show();
  }
  


}


