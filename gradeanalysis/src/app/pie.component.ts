
import { Component } from '@angular/core'


@Component({
    selector: 'pie',
    templateUrl: './pie.component.html'
})

export class PieComponent {
    public pieChartLabels: string[] = ['HTML', 'CSS', 'Angular'];
    public pieChartData: number[] = [25, 25, 50];
    public pieChartType: string = 'pie';
    public pieChartColors: string[] = ['', 'blue', 'green'];
    public chartColors: any[] = [
        {
            backgroundColor: ["teal", "skyblue", "slateblue"]
        }];
    
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}