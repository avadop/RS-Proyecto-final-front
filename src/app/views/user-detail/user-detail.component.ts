import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUserById(params.user_id)
        .subscribe(res => {
          this.user = res
        }, error => {
          if(error.status === 404)
            this.router.navigate(['Error404'], {relativeTo: this.route})
        })
      // if(!isNaN(+params.user_id)){
      //   this.userService.getUserById(params.user_id)
      //   .subscribe(res => this.user = res)
      // } else{
      //   this.router.navigate(['Error404'], {relativeTo: this.route})
      // }
    });
  }

}
