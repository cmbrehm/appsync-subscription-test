import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {API} from 'aws-amplify';
import { AppComponent } from './app.component';

const AppSyncConfig={
  'aws_appsync_graphqlEndpoint': 'https://xxx.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-1',
  'aws_appsync_authenticationType': 'API_KEY',
  'aws_appsync_apiKey': 'da2-xxxxxxxxxxxxxxxxxxxxx',
}

API.configure(AppSyncConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
