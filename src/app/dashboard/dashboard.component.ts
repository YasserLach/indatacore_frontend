import {Component, OnInit} from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {
    this.RenderBarChart()
    this.RenderPieChart()
    this.RenderRadarChart()
  }

  RenderBarChart(){
    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Monthly Sales',
          data: [30, 45, 20, 60, 10, 50],
          backgroundColor: [
            'rgba(141, 0, 201)',
            'rgba(0, 141, 60)',
            'rgba(77, 0, 201)',
            'rgba(201, 0, 131)',
            'rgba(0, 141, 201)',
            'rgba(201, 141, 0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderPieChart(){
    new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Monthly Sales',
          data: [30, 45, 20, 60, 10, 50],
          backgroundColor: [
            'rgba(141, 0, 201)',
            'rgba(0, 141, 60)',
            'rgba(77, 0, 201)',
            'rgba(201, 0, 131)',
            'rgba(0, 141, 201)',
            'rgba(201, 141, 0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderRadarChart(){
    new Chart("polarArea", {
      type: 'polarArea',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Monthly Sales',
          data: [30, 45, 20, 60, 10, 50],
          backgroundColor: [
            'rgba(141, 0, 201)',
            'rgba(0, 141, 60)',
            'rgba(77, 0, 201)',
            'rgba(201, 0, 131)',
            'rgba(0, 141, 201)',
            'rgba(201, 141, 0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
