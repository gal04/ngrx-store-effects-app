import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Pizza } from '../../models/pizza.model';
//import { Pizzas$Service } from '../../services/pizzas$.service';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas$, add one to get started.
        </div>
        <pizza-item          
          *ngFor="let pizza of (pizzas$ | async)"          
          [pizza]="pizza"
          (removei)="onRemovei($event)">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Pizza[];
  pizza: Pizza;
  visualise: Pizza;
  pizzas$$: Observable<Pizza[]>;
  /**
   * private pizzaS$ervice: Pizzas$Service,
    private route: ActivatedRoute,
    private router: Router
   */
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizzas$$ = this.store.select(fromStore.getAllPizzas$);
    //this.pizzaS$ervice.getPizzas$().subscribe(pizzas$ => {
    //  this.pizzas$ = pizzas$;
    //});
  }
  onRemovei(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    console.log("products - onRemove = " + remove);
    if (remove) {
      //this.pizzaS$ervice.removePizza(event).subscribe(() => {
       // this.router.navigate([`/products`]);
      //});      
    }
    else{
      console.log("products - stay in page ");
      //this.pizzaS$ervice.getPizzas$().subscribe(pizzas$ => {
       // this.pizzas$ = pizzas$;
      //  this.router.navigate([`/products`]);
      //});
    }
  }


}
