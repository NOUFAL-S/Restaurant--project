import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { StoreModel } from '../store-list/store.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.css'],
})
export class NewStoreComponent implements OnInit {
  title: String = 'ADD Restaurant';
  constructor(private storeService: StoreService, private router: Router) {}
  storeItem = new StoreModel(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  ngOnInit(): void {}
  AddStore() {
    this.storeService.newStore(this.storeItem);
    console.log('called');
    alert('Restaurant added');
    this.router.navigate(['/']);
  }
}
