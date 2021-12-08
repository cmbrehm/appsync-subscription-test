import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { Observable} from 'zen-observable-ts';

const SUBSCRIPTION = `subscription {
  subscribeToItem {
    id
    name
  }
}
`;

@Component({
  selector: 'app-root',
  template: '<h2>Item Change Log</h2><li *ngFor="let i of items">updated {{i.id}} {{i.name}}</li>',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'subscription-app';
  items:any[] = []
  ngOnInit() {
    let gql = API.graphql(graphqlOperation(SUBSCRIPTION)) as Observable<any>

    gql.map(x=>x.value.data.subscribeToItem)
      .subscribe(x=>this.items.push(x),
        err=>console.error(err)
    );
  }
}
