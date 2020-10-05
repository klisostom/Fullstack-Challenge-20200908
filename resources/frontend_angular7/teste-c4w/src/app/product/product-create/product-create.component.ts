import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

  addProduto(form: NgForm) {
    this.isLoadingResults = true;
    console.log(form);
    this.api.addProduto(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/produto-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
