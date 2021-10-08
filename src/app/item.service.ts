import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    private url = 'api/items';
    public collectionSize: number = 0;

    constructor(private http: HttpClient) { 

    }

    public getItems(): Observable<Array<Item>> {
        
        // Получаем данные с имитированного сервера
        return this.http.get<Array<Item>>(this.url);

        // Получаем каждый раз рандомные данные с существующего API, но к отдельным ID доступа нет
        // return this.http.get('https://random-data-api.com/api/company/random_company?size=20');
        
        // Получаем данные из файла json
        // return this.http.get('assets/items.json');  
    };

    public getItem(id:number): Observable<Item>  {
        const urlID = `${this.url}/${id}`;
        return this.http.get<Item>(urlID);
    };
}
