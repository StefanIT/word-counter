import { Component, Input, OnInit } from '@angular/core';
import { TextDetails } from '../../interfaces/text-details';

@Component({
  selector: 'app-text-details',
  templateUrl: './text-details.component.html',
  styleUrls: ['./text-details.component.scss']
})
export class TextDetailsComponent implements OnInit {

  @Input() public data: TextDetails;
  
  constructor() { }

  ngOnInit(): void {
  }

}
