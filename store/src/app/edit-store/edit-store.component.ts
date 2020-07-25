import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import{StoreModel} from '../store-list/store.model';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  title:String='Product Edit';
stores:StoreModel[];
store =new StoreModel(null,null,null,null,null,null,null,null);
  constructor(private storeService:StoreService,private router:Router) { }

  ngOnInit(): void {
    this.store=this.storeService.back();
  }
  Update()
  {
    this.storeService.updateItem(this.store);
    console.log("called");
    alert("success");
    this.router.navigate(['/']);
  }
}
