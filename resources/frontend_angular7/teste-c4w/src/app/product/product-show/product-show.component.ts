import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../..//model/produto';

@Component({
    selector: 'app-product-show',
    templateUrl: './product-show.component.html',
    styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  faEdit = faEdit;
  faDelete = faTrash;

    produto: Produto = {
        id: '',
        title: '',
        type: '',
        description: '',
        filename: '',
        height: null,
        width: null,
        rating: null,
        price: null,
        updated_at: null
    };
    isLoadingResults = true;

    constructor(private router: Router, private route: ActivatedRoute, private api: ProductService) { }


    ngOnInit(): void {
      this.getProduto(this.route.snapshot.params['id']);
    }

    getProduto(id) {
      this.api.getProduto(id)
        .subscribe(data => {
          this.produto = data;
          console.log(this.produto);
          this.isLoadingResults = false;
        });
    }

    deleteProduto(id) {

      this.isLoadingResults = true;
      this.api.deleteProduto(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/produtos']);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
}
