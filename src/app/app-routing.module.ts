import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
    { path: 'list', component: ListItemComponent },
    { path: 'card/:id', component: CardComponent },
    // Если в строке совпадение с '', то перенаправляем на list
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
