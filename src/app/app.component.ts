import { Component, VERSION } from '@angular/core';
import {
  ITreeOptions,
  KEYS,
  TREE_ACTIONS,
} from '@circlon/angular-tree-component';
import { TreeNode } from '@circlon/angular-tree-component/public-api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedNode: TreeNode;

  nodes = [
    {
      id: 1,
      customId: '1template',
      name: 'Default template',
      type: 'template',
      children: [
        {
          id: 1,
          customId: '1campaignTemplate',
          name: 'Validate',
          type: 'campaignTemplate',
          children: [
            {
              id: 1,
              customId: '1adGroupTemplate',
              name: 'Broad',
              type: 'adGroupTemplate',
            },
            {
              id: null,
              customId: 'addAdGroupTemplate',
              name: 'Add new (+)',
              type: 'adGroupTemplate',
            },
          ],
        },
        {
          id: 2,
          customId: '2campaignTemplate',
          name: 'Research',
          type: 'campaignTemplate',
        },
        {
          id: 3,
          customId: '3campaignTemplate',
          name: 'Primary',
          type: 'campaignTemplate',
        },
        {
          id: 4,
          customId: 'addCampaignTemplate',
          name: 'Add new (+)',
          type: 'campaignTemplate',
        },
      ],
    },
    {
      id: null,
      customId: 'addTemplate',
      name: 'Add new (+)',
      type: 'template',
    },
  ];
  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'expanded',
    idField: 'customId',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren)
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        },
        click: (tree, node, $event) => {
          this.selectedNode = node;
          console.log(this.selectedNode);
        },
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        },
      },
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return false;
    },
    allowDrop: (node) => {
      return false;
    },
    allowDragoverStyling: false,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement, // HTML
  };
}
