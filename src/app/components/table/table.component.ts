import { Component, OnInit } from '@angular/core';
import { StoreActionService } from './../../services/reducers/store-action/store-action.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  showDeletedFiles = false;
  columnsNames = ['Name', 'Type', 'Size', 'Is Deleted'];
  data;

  constructor(private storeActionService: StoreActionService) { }

  ngOnInit() {
    this.storeActionService.selectSelectedFolder().subscribe(selectedFolder => {
      if(selectedFolder && selectedFolder.files && selectedFolder.files.length > 0) {
        this.data = selectedFolder.files;
      }
    })
  }

}
