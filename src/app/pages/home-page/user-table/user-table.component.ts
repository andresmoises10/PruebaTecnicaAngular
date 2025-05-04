import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TypicodeInterface } from '../../../interfaces/typicode-interface';
import { TypicodeService } from '../../../Services/typicode.service';
import { TypicodeMapper } from '../../../mappers/typicode.mapper';

@Component({
  standalone: true,
  selector: 'app-user-table',
  templateUrl: 'user-table.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'city'];
  dataSource: MatTableDataSource<TypicodeInterface> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private typicodeService: TypicodeService) {
    typicodeService.getUserData().subscribe((users: TypicodeInterface[]) => {
      const reply = TypicodeMapper(users);

      this.dataSource = new MatTableDataSource(reply);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

