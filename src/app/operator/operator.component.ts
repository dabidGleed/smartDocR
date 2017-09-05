import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }
   addOperator ={}
  ngOnInit() {
  }

  submitProcess(operatorForm: NgForm){
    console.log(operatorForm.value)
    operatorForm.resetForm();
  }

}
