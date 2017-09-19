import {Injectable, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavigationComponent implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit(): void {
    let currentUserWithRole = localStorage.getItem('currentUserAndRole');
    if (currentUserWithRole == 'admin')
      this.router.navigate(['admin/home'], {replaceUrl: true});
    else if (currentUserWithRole == 'user'){
      this.router.navigate(['home'], {replaceUrl: true});
    } else {
      this.router.navigate(['login'], {replaceUrl: true});
    }
  }


}
