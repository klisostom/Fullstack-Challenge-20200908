import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public authForm: FormGroup;
    public isSubmitted = false;

    constructor(
        private jwtService: JwtService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.authForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() { return this.authForm.controls; }

    signIn(){
        this.isSubmitted = true;

        if(this.authForm.invalid){
          return;
        }

        const result = this.jwtService.login(this.authForm.value);
        console.log(result);
        this.router.navigateByUrl('/produtos');
      }
}
