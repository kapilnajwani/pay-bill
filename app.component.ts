import { OnInit ,ViewChild} from '@angular/core';
import { Component } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';
import{ ChartOptions, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';
export interface PeriodicElement {
  amountin: number;
  month: string;
  paidon: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {month: 'June 2021', amountin:225.78 , paidon: '--'},
  {month: 'May 2021', amountin:225.78 , paidon:'June 04 2021' },
  {month: 'Apr 2021', amountin:225.78 , paidon: 'May 04 2021'},
  {month: 'Mar 2021', amountin:225.78 , paidon:'Apr 04 2021' },

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['month', 'amountin', 'paidon', 'status'];
  dataSource = ELEMENT_DATA;
  title = 'Pay-Bills';
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Janvary', 'Febary', 'March', 'April', 'May', 'June'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData:  ChartDataSets[]= [
    { data: [350,50,300,100,200,400] },
    
  ];

  constructor() { }

  ngOnInit() {
  }
}
  
   
    
    
  

  
    


