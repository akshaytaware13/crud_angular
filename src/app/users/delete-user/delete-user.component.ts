import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {


  userId: string = '';


  constructor(private actvitedRoute: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.actvitedRoute.params.subscribe(data => {
      this.userId = data['id'];
    })
    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open("User Deleted Successfully");
        this.router.navigateByUrl('list');
      })
    }
  }
  deleteUser(){
    console.log("Delete user successfully");
  }

}
