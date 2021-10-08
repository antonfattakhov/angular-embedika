import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

// Импортируем для имитации сервера
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { Search2Pipe, Search3Pipe, SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    CardComponent,
    FilterComponent,
    PaginationComponent,
    SearchPipe,
    Search2Pipe,
    Search3Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // При наличии реального сервера имитацию нужно удалить
    HttpClientInMemoryWebApiModule.forRoot(
        // dataEncapsulation: false позволяет получить items[], а не data{ items[] }
        InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
