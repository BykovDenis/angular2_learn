import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'user-email',
	template: `<input [ngModel]="userEmail" (ngModelChange)="onNameChange($event)"  placeholder="userEmail" />`
})

export class AppUserEmail{	

	@Input() userEmail: string;	
	@Output() userEmailChange = new EventEmitter<string>();
    onNameChange(model: string) {

    	this.userEmail = model;
        this.userEmailChange.emit(model);
    }
	
}