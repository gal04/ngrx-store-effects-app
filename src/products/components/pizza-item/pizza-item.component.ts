import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-item.component.scss'],
  template: `
    <div class="pizza-item">
      <a [routerLink]="['/products', pizza.id]">
        <pizza-display
          [pizza]="pizza">
        </pizza-display>
        <h4>{{ pizza.name }}</h4>
        <button type="button" class="btn btn__ok">
          View Pizza
        </button>
        <button 
            type="button"
            class="btn btn__warning"            
            (click)="removePizzaOut()">
            Delete Pizza
          </button>
      </a>
    </div>
  `,
})
export class PizzaItemComponent {

  @Input() pizza: any;
  @Output() removei = new EventEmitter<Pizza>();

  removePizzaOut() {
    //const { this } = form;
    console.log("Pizza item");
    console.log(this.pizza);
    this.removei.emit({ ...this.pizza });
  }
}
