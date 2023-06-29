import { Component } from '@angular/core';
import { SPENDINGS } from '../mock-spendings';
import { Spending } from '../spending';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.scss'],
})
export class SpendingsComponent {
  spendings = SPENDINGS;
  selectedId?: number;
  onClick = (spending: Spending) => {
    if (spending.id === this.selectedId) this.selectedId = undefined;
    else this.selectedId = spending.id;
  };
}
