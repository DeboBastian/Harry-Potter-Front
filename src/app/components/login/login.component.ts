import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }



  async onSubmit() {

    try {
      const response = await this.usersService.login(this.formulario.value)
      const {token} = response
      localStorage.setItem('tokenharry', token)
      this.router.navigate(['/movies'])
    } catch (error) {
      console.log(error)
    }
  }
}

