import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model:any=[];
  getvalues(f:NgForm)
  {
    alert ("Form Submitted")
  }
}
