import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface Node {
  name: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Specialties',
    children: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Vue' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
    ],
  },
  {
    name: 'Tecnologies',
    children: [
      {
        name: 'Node.js',
        children: [{ name: 'Express' }, { name: 'Koa' }, { name: 'Socket.io' }],
      },
      {
        name: 'React Native',
        children: [{ name: 'React Native' }, { name: 'Expo' }],
      },
      {
        name: 'Angular',
        children: [{ name: 'Angular' }, { name: 'Angular Material' }],
      },
    ],
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass'],
})
export class TreeComponent implements OnInit {
  private _transformer = (node: Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_:number, node: FlatNode) => node.expandable;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = TREE_DATA;
  }
}
