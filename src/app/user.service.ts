import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge, tap } from 'rxjs';
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
    return merge(
      this.getUser(1).pipe(tap((user) => this.user$$.next(user))),
      this.getSpendings(1).pipe(
        tap((spendings) => this.spendings$$.next(spendings))
      )
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

  private getUser(id: number): Observable<Omit<User, 'spendings'>> {
    return this.http.get<Omit<User, 'spendings'>>(
      environment.serverUrl + `/users/${id}`
    );
  }

  private getSpendings(userId: number): Observable<Spending[]> {
    return this.http.get<Spending[]>(
      environment.serverUrl +
        `/spendings?userId=${userId}&_sort=date&_order=desc`
    );
  }
}
