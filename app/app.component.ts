import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent { 
    public email:string = '123';
    public userPassw:string = '';

    public process() {
    	console.log(this.email, this.userPassw);
    }

}