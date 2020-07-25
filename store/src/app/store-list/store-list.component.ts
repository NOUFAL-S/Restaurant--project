import { Component, OnInit } from '@angular/core';
import{StoreModel} from './store.model';
import{StoreService}from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  title:String='Store List';
  //store is the model class for a store item
  stores:StoreModel[];
  //image properties
  imageWidth:number=50;
  imageMargin:number=2;
  
showImage: boolean = false;
//creating service object for calling getstores()
  constructor(private storeService:StoreService, private router:Router) { }
// title:String="store-List";

toggleImage():void{
  this.showImage = !this.showImage;
}
doUpdate(store){
  this.storeService.setter(store);
  console.log('function called')
  this.router.navigate(['/edit'])
}


  ngOnInit(): void {
    //calling getstore() and loading the stores to store array
    this.storeService.getStores().subscribe((data)=>{
      this.stores= JSON.parse(JSON.stringify(data));
    })
    
  }
deleteItem(store){
  this.storeService.deleteStore(store._id)
  .subscribe(res=>{
    this.stores.splice(this.stores.indexOf(store),1);
    // this.router.navigate(['/'])
  })
}
}
