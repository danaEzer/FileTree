import { Component, OnInit } from '@angular/core';
// import { folders } from '../../data/server';
import { StoreActionService } from '../../services/reducers/store-action/store-action.service';
// import { TreeModule, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
import { DataService } from './../../services/data/data.service';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  isx = false;
  nodes;
  // I used the action mapping in order to catch the click event 
  // since they have a bug in the focus event function (that is being called twice)
  options = { 
    childrenField: 'files',
    allowDrag: true,
    actionMapping: {
      mouse: {
        click: (tree, node, $event) => {
          // Updates the blue selected color
          node.setIsActive(true);
          this.selectNode(node.data);
        }
      }
    }
  };

  constructor( private storeActionService: StoreActionService, private dataService: DataService) {
    this.subscribeFolders();
  }

  ngOnInit() {}

  subscribeFolders() {
    this.storeActionService.selectFolders().subscribe(folders => {
      this.nodes = folders;
    });
  }

  onToggle(event) {
    // When clicking on a specific folder - check on the server if the folder has folder children
    if(!event.node.data.check) {
      // Marke the node as one that was provided with his folders children
      event.node.data.check = true;
      this.dataService.getChildrenFolders(event.node.data.id); 
    }
  }
  selectNode(folder){
    // Update the table according to click
    this.storeActionService.updateSelectedFolder(folder);
  }
}
