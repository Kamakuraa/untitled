import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";
import {VehiclesService} from "../../shared/services/vehicles.service";

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: any;
  priority: any[];

  constructor(private service:VehiclesService) {
    // this.dataSource = {
    //   store: {
    //     type: 'odata',
    //     key: 'Task_ID',
    //     url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
    //   },
    //   expand: 'ResponsibleEmployee',
    //   select: [
    //     'Task_ID',
    //     'Task_Subject',
    //     'Task_Start_Date',
    //     'Task_Due_Date',
    //     'Task_Status',
    //     'Task_Priority',
    //     'Task_Completion',
    //     'ResponsibleEmployee/Employee_Full_Name'
    //   ]
    // };
    this.dataSource = new DataSource({
      store: new CustomStore({
        load:(loadOptions:any) => {
          return this.service.getVehicles(loadOptions)
        }
      })
    })
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }
  getHeight(){
    return window.innerHeight - 150
  }
}
