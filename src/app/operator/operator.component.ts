import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
 
    addOperator = {
      userId: '',
      status: false,
      client :''
    }
  
  clientData = [{
      name: 'client1',
      id: '1'
    },
    {
      name: 'client2',
      id: '2'
    },
    {
      name: 'client3',
      id: '3'
    },
    {
      name: 'client4',
      id: '4'
    }
  ];
  roles = {
    operator: false,
    manager: false,
    admin: false,
    user: false
  };

  submitProcess(operatorForm: NgForm) {
      operatorForm.resetForm();
    this.roles = {
    operator: false,
    manager: false,
    admin: false,
    user: false
  };
  
  }

  addUserId(addOperator) {
    if (addOperator.userId == "") {
      this.addOperator.userId = addOperator.emailId;
    }

  }


}

