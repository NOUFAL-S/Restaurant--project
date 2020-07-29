import { Component, OnInit } from '@angular/core';
import { StoreModel } from './store.model';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',

  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  title: String = 'Store List';
  //store is the model class for a store item
  stores: StoreModel[];

  //creating service object for calling getstores()
  constructor(private storeService: StoreService, private router: Router) {}

  doUpdate(store) {
    if (confirm('Are you sure you want to update this?')) {
      this.storeService.setter(store);
      
      this.router.navigate(['/edit']);
      
    }
  }

  ngOnInit(): void {
    //calling getstore() and loading the stores to store array
    this.storeService.getStores().subscribe((data) => {
      this.stores = JSON.parse(JSON.stringify(data));
    });
  }

  deleteItem(store) {
    if (confirm('Are you sure you want to delete this?')) {
      this.storeService.deleteStore(store._id).subscribe((res) => {
        this.stores.splice(this.stores.indexOf(store), 1);
        alert('Restaurant deleted');
      });
    }
  }
}
