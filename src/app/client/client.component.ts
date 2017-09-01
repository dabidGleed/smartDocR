import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  constructor() { }
  remGroup=[
  ];
  myModel={}
  removeUser(i){
    this.remGroup.splice(i, 1)
  }
    addUser(data){
      this.remGroup.push(data);
      this.myModel={}
      // console.log("iiii");
      // console.log(this.remGroup);

    }
    onSubmit(ngForm) {}

  ngOnInit() {
  }
}
