import { DataService } from './services/data/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private dataService: DataService) {
    this.dataService.getAndUpdateFolders();
  }
}
