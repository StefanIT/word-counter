import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DbTextDetails } from '../../interfaces/db-text-details';
import { TextsService } from '../../services/texts.service';
import { TextsFormComponent } from '../texts-form/texts-form.component';

@Component({
  selector: 'app-texts-table',
  templateUrl: './texts-table.component.html',
  styleUrls: ['./texts-table.component.scss']
})
export class TextsTableComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private textsService: TextsService,
    private dialog: MatDialog
  ) { }

  private subscription: Subscription = new Subscription();

  displayedColumns: string[] = ['id', 'text', 'count'];

  dataSource = new MatTableDataSource<DbTextDetails>([]);

  ngOnInit(): void {
    this.getTexts();
  }

  private getTexts() {
    const request = this.textsService.getAll();
    this.subscription.add(
      request.subscribe(data => {
        if(data) {
          this.dataSource.data = data;
        }
      })
    )
  }
  
  showModal() {
    this.dialog.open(TextsFormComponent, 
      {
        width: "50%",
      }
    ).afterClosed().subscribe((x:any) => {
      this.getTexts();
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
