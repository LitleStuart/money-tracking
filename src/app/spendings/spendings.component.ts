import { Component, Input, computed } from '@angular/core';
import { Spending } from '../spending';
import { UserService } from '../user.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.scss'],
})
export class SpendingsComponent {
  spendings = this.userService.spendings$;

  constructor(private userService: UserService) {}
}
