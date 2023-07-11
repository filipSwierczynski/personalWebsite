import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "";
  serverCreated = false;
  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(){
    
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    
  }

  // onUpdateServerName(e: any){
  //   this.serverName = e.target.value;
    
  // }
}
