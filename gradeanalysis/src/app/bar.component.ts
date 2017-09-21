import { Component } from '@angular/core'
@Component({
    selector: 'bar',
    templateUrl: './bar.component.html'
})

export class BarComponent {
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [90, 80, 70, 60, 50, 40, 30], label: 'other front end technologies usage' },
        { data: [30, 40, 50, 60, 70, 80, 90], label: 'Angular usage' }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }


}