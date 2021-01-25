import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/config/api';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserInputRequest } from 'src/app/user-input/interface/user-input-request';
import { DbTextDetails } from '../interfaces/db-text-details';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<DbTextDetails[]> {
    return this.apiService.get(APIS.databaseInput.getAll);
  }

  insert(request: UserInputRequest): Observable<DbTextDetails> {
    return this.apiService.post(APIS.databaseInput.insert, request);
  }
}
