import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/config/api';
import { TextDetails } from 'src/app/shared/interfaces/text-details';
import { ApiService } from 'src/app/shared/services/api.service';
import { FileInputRequest } from '../interfaces/file-input-request';

@Injectable({
  providedIn: 'root'
})
export class FileInputService {

  constructor(
    private apiService: ApiService
  ) { }

  getWords(request: FileInputRequest): Observable<TextDetails> {
    return this.apiService.post(APIS.fileInput.getWords, request);
  }
}
