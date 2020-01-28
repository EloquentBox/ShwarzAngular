import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'no server has been created';
  serverName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'server was created. NAme is ' + this.serverName;
  }
  onUpdateServer(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
