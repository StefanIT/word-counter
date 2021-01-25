import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  get(path: string): Observable<any> {
    return this.http.get(this.createApiUrl(path)).pipe(catchError(x => this.handleError(x)));
  }

  post(path: string, request: any): Observable<any> {
    return this.http.post(this.createApiUrl(path), request).pipe(catchError(x => this.handleError(x)));
  }

  put(path: string, request: any): Observable<any> {
    return this.http.put(this.createApiUrl(path), request).pipe(catchError(x => this.handleError(x)));
  }

  delete(path: string, request: any): Observable<any> {
    return this.http.delete(this.createApiUrl(path), request).pipe(catchError(x => this.handleError(x)));
  }

  private handleError(error: any) {
    const errorMessage = error.message;
    this.messageService.errorMessage(errorMessage);
    return throwError(error);
  }

  private createApiUrl(path: string): string {
    return `${environment.baseApiUrl}${path}`; 
  }
}
