import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.userService.getUserById(params.user_id)
        .subscribe(res => this.user = res));
  }

}
