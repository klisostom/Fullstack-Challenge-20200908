import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    NgForm,
    Validators
} from '@angular/forms';
import { ProductService } from './../../service/product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
    id: String = '';
    productForm: FormGroup;

    title: String = '';
    type: String = '';
    description: String = '';
    filename: String = '';
    height: number = null;
    width: number = null;
    rating: number = null;
    price: number = null;

    isLoadingResults = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ProductService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.getProduto(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.params['id']);
        this.productForm = this.formBuilder.group({
          'title' : [null, Validators.required],
          'type' : [null, Validators.required],
          'description' : [null, Validators.required],
          'filename' : [null, Validators.required],
          'height' : [null, Validators.required],
          'width' : [null, Validators.required],
          'rating' : [null, Validators.required],
          'price' : [null, Validators.required],
        });
    }

    getProduto(id: String) {
        this.api.getProduto(id).subscribe(data => {
            this.id = data.id;
            console.log('vem do banco');
            console.log(data.id);
            this.productForm.setValue({
                title: data.title,
                type: data.type,
                description: data.description,
                filename: data.filename,
                height: data.height,
                width: data.width,
                rating: data.rating,
                price: data.price,
            });
        });
    }

    updateProduto(form: NgForm) {
        this.isLoadingResults = true;
        this.api.editarProduto(this.id, form).subscribe(
            res => {
                this.isLoadingResults = false;
                this.router.navigate(['/produto-detalhe/' + this.id]);
            },
            err => {
                console.log(err);
                this.isLoadingResults = false;
            }
        );
    }
}
