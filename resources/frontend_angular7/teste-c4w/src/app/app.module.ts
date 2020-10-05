import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,

        ProductsComponent,
        ProductShowComponent,
        ProductCreateComponent,
        ProductEditComponent,
        AuthComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: function tokenGetter() {
                    return localStorage.getItem('access_token');
                },
                allowedDomains: ['127.0.0.1:4200'],
                disallowedRoutes: ['http://127.0.0.1:4200/auth/login']
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
