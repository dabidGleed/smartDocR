import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})

export class ProcessComponent implements OnInit {
   hours:any=[];
   mins:any=[];
  constructor() {
    for(var i=1; i<25; i++){
      this.hours.push(i);
    }
     for(var i=1; i<61; i++){
      this.mins.push(i);
    }
   }
   processData =[];
    addProcess = {
    turnStartTime:'',
    turnEndTime:''
    };

    submitProcess(addProcessFrom: NgForm){
      this.processData.push({processName:addProcessFrom.value.processName,turnStartTime:addProcessFrom.value.turnStartTime,turnEndTime:addProcessFrom.value.turnEndTime,remarks:addProcessFrom.value.remarks});
      addProcessFrom.resetForm();
    }

  ngOnInit() {
  }

}
