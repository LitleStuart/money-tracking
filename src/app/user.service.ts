import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Spending } from './spending';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<User>({} as User);
  user$ = this.user$$.asObservable();

  private spendings$$ = new BehaviorSubject<Spending[]>([]);
  spendings$: Observable<Spending[]> = this.spendings$$.asObservable();

  constructor(private http: HttpClient) {}

  resolve(): Observable<unknown> {
    return this.getUser(1).pipe(
      tap((user) => {
        this.user$$.next(user);
        this.spendings$$.next(user.spendings);
      })
    );
  }

  addSpending(spending: Omit<Spending, 'id'>) {
    return this.http
      .post<Spending>(environment.serverUrl + '/spendings', {
        ...spending,
        userId: 1,
      })
      .pipe(
        tap((spending) =>
          this.spendings$$.next([...this.spendings$$.getValue(), spending])
        )
      );
  }

  private getUser(id: number): Observable<User> {
    return this.http.get<User>(
      environment.serverUrl + `/users/${id}?_embed=spendings`
    );
  }
}
