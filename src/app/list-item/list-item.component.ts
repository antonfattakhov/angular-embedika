import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item, addModelArgs } from '../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

    public items: Item[] = [];
    public collectionSize: number = 0;
    public page: number;

    public searchItem: string = '';
    public searchSuffix: string = '';
    public searchType: string = '';

    constructor(private itemService: ItemService) {
        let localItem = localStorage.getItem('searchItem');
        let localType = localStorage.getItem('searchType');
        let localSuffix = localStorage.getItem('searchSuffix');
        let localPage = localStorage.getItem('page');

        if (localItem != null) {
            this.searchItem = localItem;
        }
        if (localType != null) {
            this.searchType = localType;
        }
        if (localSuffix != null) {
            this.searchSuffix = localSuffix;
        }
        if (localPage != null) {
            this.getItems({page: Number(localPage), pagesize: 5});
            this.page = Number(localPage);
        } else {
            this.getItems({page: 1, pagesize: 5});
            this.page = 1;
        }
     }


    ngOnInit() {}

    getItems(args: addModelArgs) {

        this.itemService.getItems().subscribe((items) => {
            
            let startIndex = args.pagesize * (args.page - 1);
            this.collectionSize = items.length;
            this.items = items.slice(startIndex, startIndex + args.pagesize);

        },
            (error) => {
                // error - объект ошибки
                console.log('oops', error);
            }
        );
    }

    public getFromFilter(data: string) {
        this.searchItem = data;
        localStorage.setItem('searchItem', this.searchItem);
    }
    public getFromFilter2(data: string) {
        this.searchType = data;
        localStorage.setItem('searchType', this.searchType);
    }
    public getFromFilter3(data: string) {
        this.searchSuffix = data;
        localStorage.setItem('searchSuffix', this.searchSuffix);
    }
}
