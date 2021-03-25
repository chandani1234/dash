import { Component, OnInit } from '@angular/core';
import { about } from '../model/about.model';
import { SharedserviceService } from '../sharedservices/sharedservice.service';
import { Sharedservice1Service } from '../sharedservices/sharedservice1.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

about=new about()
aboutarray=[];
  title='Submit';
  activeindex=-1;
  servicedata: any;
  constructor(private sharedservice1:Sharedservice1Service, private sharedservice:SharedserviceService) { }

  ngOnInit(): void {
    this.servicedata= this.sharedservice.getdata();
    console.log(this.servicedata);
    
 
  }
  onsubmit(form)
{
  if(this.activeindex==-1)
  {
    
    this.aboutarray.push(this.about);
     this.about=new about();
  }
else{
  this.aboutarray.splice(this.activeindex,1 ,this.about);
}
form.submitted=false;
this.about=new about();
this.title='Submit';
this.activeindex=-1;
}
delete(j)
{
  this.aboutarray.splice(j);
}
edit(obj,index)
{
  this.title='update';
  this.about=obj;
  this.activeindex=index;
}
}


