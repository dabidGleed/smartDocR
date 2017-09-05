import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() {}
  rowData = [];
  contactDetails = {};
  company= {};
  client = {};
  addRow(data) {
     this.rowData.push({firstName:data.firstName,lastName:data.lastName,phoneNumber:data.phoneNumber,email:data.lastName});
     this.contactDetails = {};

  }
  removeRow(i) {
    this.rowData.splice(i, 1);

  }
  submitProcess(contactForm: NgForm){
    console.log(contactForm.value);

  }
  ngOnInit() {}

}

