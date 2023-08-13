import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spending } from '../spending';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

const EMPTY_SPENDING: Spending = {
  id: 0,
  userId: 0,
  amount: 0,
  category: '',
  date: '',
  comment: '',
};

@Component({
  selector: 'app-add-spending-form',
  templateUrl: './add-spending-form.component.html',
  styleUrls: ['./add-spending-form.component.scss'],
})
export class AddSpendingFormComponent {
  @Input() userId?: number;

  @Output() addSpendingEvent = new EventEmitter<Spending>();

  spendingForm = this.fb.group({
    amount: [EMPTY_SPENDING.amount],
    category: [EMPTY_SPENDING.category],
    date: [EMPTY_SPENDING.date],
    comment: [EMPTY_SPENDING.comment],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  addSpending() {
    this.userService
      .addSpending(this.spendingForm.value as Spending)
      .subscribe();
  }
}
