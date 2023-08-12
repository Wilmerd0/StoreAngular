import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  total$ = this.shoppingCArtSvc.totalAction$;
  cart$ = this.shoppingCArtSvc.cartAction$;
    
  constructor(private shoppingCArtSvc:ShoppingCartService){}

}
