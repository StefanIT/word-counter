import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/config/api';
import { TextDetails } from 'src/app/shared/interfaces/text-details';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserInputRequest } from '../interface/user-input-request';

@Injectable({
  providedIn: 'root'
})
export class UserinputService {

  constructor(
    private apiService: ApiService
  ) { }

  getWords(request: UserInputRequest): Observable<TextDetails> {
    return this.apiService.post(APIS.userInput.getWords, request);
  }
}
