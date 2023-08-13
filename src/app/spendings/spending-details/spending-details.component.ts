import { Component, Input } from '@angular/core';
import { Spending } from 'src/app/spending';

@Component({
  selector: 'app-spending-details',
  templateUrl: './spending-details.component.html',
  styleUrls: ['./spending-details.component.scss'],
})
export class SpendingDetailsComponent {
  @Input() spending!: Spending;
  selected? = false;
}
