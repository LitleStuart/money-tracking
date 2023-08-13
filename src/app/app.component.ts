import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Money tracking';
  wasLoaded = false;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.userService.resolve().subscribe({
      next: () => {
        this.wasLoaded = true;
        this.cd.markForCheck();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
