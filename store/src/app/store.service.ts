import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModel } from './store-list/store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private store: StoreModel;
  constructor(private http: HttpClient) {}
  getStores() {
    return this.http.get('http://localhost:3000/stores');
  }
  newStore(item) {
    return this.http
      .post('http://localhost:3000/insert', { store: item })
      .subscribe((data) => {
        console.log(data);
      });
  }

  setter(store) {
    this.store = store;
  }
  back() {
    return this.store;
  }

  updateItem(item) {
    return this.http
      .put('http://localhost:3000/edit', { store: item })
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteStore(_id: String) {
    return this.http.delete('http://localhost:3000/delete/' + _id);
  }
}
