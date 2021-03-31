import { Component } from '@angular/core';

@Component ({
    selector: 'hello-app',
    templateUrl: './hello.component.html'
})

export class HelloComponent {
    public user = {
        id : '2180177',
        name : 'DuongHB'
    };
}