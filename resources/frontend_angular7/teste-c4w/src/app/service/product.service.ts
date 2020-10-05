import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from '../model/produto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMTgzMDkyMSwiZXhwIjoxNjAxODM0NTIxLCJuYmYiOjE2MDE4MzA5MjEsImp0aSI6IkgzbW5LSlA0cTlTMWVGSGYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.q0L3gYzjgzKdGKohh75IS67PBpOIOkUOxkxu2j-K588'
   })
};
const apiUrl = 'http://127.0.0.1:8000/api/products';

/** @export @class ProductService */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @return {*}  {Observable<Produto[]>}
   * @memberof ProductService
   */
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl).pipe(
      tap(produtos => console.log('leu os produtos')),
      catchError(this.handleError('getProdutos', []))
    );
  }

  /**
   *
   * @param {number} produtoId
   * @return {*}  {Observable<Produto>}
   * @memberof ProductService
   */
  getProduto(produtoId: String): Observable<Produto> {
    const url = `${apiUrl}/${produtoId}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => console.log(`leu o produto produtoId=${produtoId}`)),
      catchError(this.handleError<Produto>(`getProduto produtoId=${produtoId}`))
    );
  }

  /**
   *
   * @param {*} produto
   * @return {*}  {Observable<Produto>}
   * @memberof ProductService
   */
  addProduto(produto: any): Observable<Produto> {
    return this.http.post<Produto>(apiUrl, produto, httpOptions).pipe(
      tap((produto: Produto) =>
        console.log(`adicionou o produto com w/ produtoId=${produto.id}`)
      ),
      catchError(this.handleError<Produto>('addProduto'))
    );
  }

  /**
   *
   * @param {number} produtoId
   * @param {*} produto
   * @return {*}  {Observable<any>}
   * @memberof ProductService
   */
  editarProduto(produtoId: String, produto: any): Observable<any> {
    const url = `${apiUrl}/${produtoId}`;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${produtoId}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  /**
   *
   * @param {number} produtoId
   * @return {*}  {Observable<Produto>}
   * @memberof ProductService
   */
  deleteProduto(produtoId: number): Observable<Produto> {
    const url = `${apiUrl}/${produtoId}`;
    return this.http.delete<Produto>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${produtoId}`)),
      catchError(this.handleError<Produto>('deleteProduto'))
    );
  }

  /**
   *
   * @private
   * @template T
   * @param {string} [operation='operation']
   * @param {T} [result]
   * @return {*}
   * @memberof ProductService
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
