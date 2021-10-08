import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'embedika';

    constructor(private itemService: ItemService) { }

    ngOnInit() {

    }

}
