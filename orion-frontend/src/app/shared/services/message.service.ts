import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastr: ToastrService
  ) { }

  errorMessage(text: string) {
    this.toastr.error(text, "Error message");
  }
}
