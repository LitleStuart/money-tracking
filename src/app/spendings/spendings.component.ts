import { Component, Input } from '@angular/core';
import { Spending } from '../spending';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.scss'],
})
export class SpendingsComponent {
  @Input() spendings?: Spending[];
  selectedIndex?: number;
}
