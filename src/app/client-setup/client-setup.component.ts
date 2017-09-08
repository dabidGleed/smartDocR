import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'client-setup',
  templateUrl: './client-setup.component.html',
  styleUrls: ['./client-setup.component.css']
})
export class ClientSetupComponent implements OnInit {

  constructor() { }
  rowData = [];
  clientList= [
    { id: '123', firstName: 'Sriram', contractDate: '1504875230783', status: true },
    { id: '124', firstName: 'Jagadeesh', contractDate: '1504875234783', status: false },
    { id: '125', firstName: 'Shankar', contractDate: '1504875232783', status: true },
    { id: '126', firstName: 'Swamy', contractDate: '1504875231783', status: false}
  ];

  ngOnInit() {}
}