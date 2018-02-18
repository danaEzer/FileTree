import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TreeComponent } from './components/tree/tree.component';
import { TableComponent } from './components/table/table.component';
// Services
import { DataService } from './services/data/data.service';
import { StoreActionService } from './services/reducers/store-action/store-action.service';
// Reducers
import { StoreModule } from '@ngrx/store';
import { FilesReducer } from './services/reducers/folders.reducer';
import { SelectedFolderReducer } from './services/reducers/selected-folder.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TreeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TreeModule,
    StoreModule.forRoot({ folders: FilesReducer, selectedFolder: SelectedFolderReducer })
  ],
  providers: [DataService, StoreActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
