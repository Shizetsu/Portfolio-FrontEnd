import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public user : User | undefined;
  public editUser: User | undefined;
  constructor(private acercaDeService : AcercaDeService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.acercaDeService.getUser().subscribe({
      next: (response: User) =>{
        this.user=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
