import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    current_page: number;
    first_page_url: number;
    from: number;
    to: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    per_page: number;
    prev_page_url: string;
    products: any;

    faEdit = faEdit;
    faDelete = faTrash;

    isLoadingResults = true;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute,
        private api: ProductService
    ) {}

    ngOnInit(): void {
        this.produtos();
    }

    produtos() {
        this.productService.getProdutos().subscribe(
            (response: any) => {
                this.products = response.data;

                this.current_page = response.current_page;
                this.first_page_url = response.first_page_url;
                this.from = response.from;
                this.to = response.to;
                this.last_page = response.last_page;
                this.last_page_url = response.last_page_url;
                this.next_page_url = response.next_page_url;
                this.per_page = response.per_page;
                this.prev_page_url = response.prev_page_url;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    deleteProduto(id) {
        console.log(id);
        this.isLoadingResults = true;
        this.api.deleteProduto(id).subscribe(
            res => {
                this.isLoadingResults = false;
                // this.router.navigate(['/produtos']);
                location.reload(true);
            },
            err => {
                console.log(err);
                this.isLoadingResults = false;
            }
        );
    }
}
