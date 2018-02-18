import { DataService } from './../../services/data/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TreeComponent } from './tree.component';
import { StoreActionService } from '../../services/reducers/store-action/store-action.service';
import { FilesReducer } from '../../services/reducers/folders.reducer';
import { SelectedFolderReducer } from '../../services/reducers/selected-folder.reducer';
import { TreeModule } from 'angular-tree-component';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ],
      providers: [ StoreActionService, DataService, TreeModule ],
      imports: [ 
        StoreModule.forRoot({ folders: FilesReducer, selectedFolder: SelectedFolderReducer })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TreeComponent);
    // fixture.debugElement.injector.get(StoreActionService);
    // fixture.debugElement.injector.get(DataService);
    
    // let storeActionService: StoreActionService = new StoreActionService(new StoreActionService(new  Store<AppState>()));
    // let dataService: DataService = new DataService()
    // component = new TreeComponent(storeActionService, dataService)
    
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
