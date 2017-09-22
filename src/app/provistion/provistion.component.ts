import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-provistion',
  templateUrl: './provistion.component.html',
  styleUrls: ['./provistion.component.css']
})
export class ProvistionComponent implements OnInit {

  constructor() { }
    clients = [
    { name: 'John'},
    { name: 'Ethan' },
    { name: 'Liam' },
    { name: 'Mason' },
    { name: 'Mason'},
    { name: 'James'},
    { name: 'Alexander'}
    ];
    company={
    selectClient :"",
    };
    submitName(contactFolderForm: NgForm){
    console.log(contactFolderForm.value);
    contactFolderForm.resetForm();
    }
    ftpProcess(contactFormFtp: NgForm){
    console.log(contactFormFtp.value);
    contactFormFtp.resetForm();
    }
    submitIp(contactIpForm: NgForm){
    console.log(contactIpForm.value);
    contactIpForm.resetForm();
    }
    submitEmail(contactEmailForm: NgForm){
    console.log(contactEmailForm.value);
    contactEmailForm.resetForm();
    }
  ngOnInit() {
  }
}
