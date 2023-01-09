import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { min } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private _snackbar: MatSnackBar) {

  }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required,Validators.minLength(4)]
      ),
      'email': new FormControl('', [Validators.required,Validators.email]
      ),
      'Phone': new FormControl('', [Validators.required,Validators.maxLength(10)])
    })
  }
  createUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      this._snackbar.open("User Created Successfully");
    }
    )
  }

}


