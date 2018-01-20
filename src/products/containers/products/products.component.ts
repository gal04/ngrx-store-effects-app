import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../services/pizzas.service';

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
        <div *ngIf="!((pizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item          
          *ngFor="let pizza of (pizzas)"          
          [pizza]="pizza"
          (removei)="onRemovei($event)">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];
  pizza: Pizza;
  visualise: Pizza;

  constructor(
    private pizzaService: PizzasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }
  onRemovei(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    console.log("products - onRemove = " + remove);
    if (remove) {
      this.pizzaService.removePizza(event).subscribe(() => {
        this.router.navigate([`/products`]);
      });      
    }
    else{
      console.log("products - stay in page ");
      //this.pizzaService.getPizzas().subscribe(pizzas => {
       // this.pizzas = pizzas;
      //  this.router.navigate([`/products`]);
      //});
    }
  }


}
