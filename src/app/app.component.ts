import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import {
  ITreeOptions,
  KEYS,
  TREE_ACTIONS,
} from '@circlon/angular-tree-component';
import { TreeNode } from '@circlon/angular-tree-component/public-api';

enum TemplateNodeTypeEnum {
  template = 'template',
  amazonAdvertisingType = 'amazonAdvertisingType',
  campaignTemplate = 'campaignTemplate',
  adGroupTemplate = 'adGroupTemplate',
  adGroupChildrenTemplate = 'adGroupChildrenTemplate',
}

enum AddNodeEnum {
  addCampaignTemplate = 'addCampaignTemplate',
  addAdGroupTemplate = 'addAdGroupTemplate',
}

interface ITemplateNode {
  id: number;
  customId: string;
  name: string;
  type: TemplateNodeTypeEnum;
  children: ITemplateNode[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('tree') tree;

  selectedNode: TreeNode;

  nodes = [
    {
      id: 1,
      customId: '1template',
      name: 'Default template',
      type: 'template',
      children: [
        {
          customId: '1amazonAdvertisingType',
          type: 'amazonAdvertisingType',
          name: 'Sponsored products',
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
                  customId: AddNodeEnum.addAdGroupTemplate,
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
              customId: AddNodeEnum.addCampaignTemplate,
              name: 'Add new (+)',
              type: 'campaignTemplate',
            },
          ],
        },
      ],
    },
    // ,{
    //   id: null,
    //   customId: 'addTemplate',
    //   name: 'Add new (+)',
    //   type: 'template',
    // },
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
          const data = node.data as ITemplateNode;
          switch (data.customId) {
            case AddNodeEnum.addCampaignTemplate:
              this.addNodeToParent(
                node.parentNode,
                new TreeNode(
                  {
                    id: node.parentNode.children.length,
                    name: '',
                    customId: '' 
                  } as ITemplateNode,
                  node.parentNode,
                  tree,
                  node.parentNode.children.length
                )
              );
              break;
            case AddNodeEnum.addAdGroupTemplate:
              this.addNodeToParent(node.parentNode, node);
              break;
            default:
              this.setSelectedNode(node);
              break;
          }
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

  ngAfterViewInit(): void {
    this.tree.treeModel.expandAll();
  }

  setSelectedNode(node: TreeNode) {
    this.selectedNode = node;
  }

  addNodeToParent(parentNode: TreeNode, node: TreeNode) {
    parentNode.children.push(node);
    this.tree.treeModel.update();
  }
}
