import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    item?: Item;
  constructor(
      private location: Location,
      private route: ActivatedRoute,
      private itemService: ItemService) { }

  ngOnInit(): void {
      this.getUser();
  }

    getUser(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.itemService.getItem(id).subscribe((item) => {this.item = item},
        (error) => {
            // error - объект ошибки
            console.log('oops', error);
        });
    }
  goBack(): void {
    this.location.back();
  }
}
