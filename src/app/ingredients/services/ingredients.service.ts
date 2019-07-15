import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {IIngredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private readonly API_INGREDIENTS_URL = 'https://recipes-api1.herokuapp.com/ingredients';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IIngredient[]> {
    return this.http
      .get<IIngredient[]>(this.API_INGREDIENTS_URL)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
