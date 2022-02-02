import { Component, OnInit, VERSION } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    of(2,4,6,8).subscribe(console.log);
    from([20,24,35]).subscribe({
      next:item=> console.log(`resulting item..${item}`),
      error:err => console.log(`error occured ${err}`),
      complete:()=> console.log('copleted')}
    );

    from(['Apple1','Apple2','Apple3']).subscribe({
      next:item=> console.log(`resulting item..${item}`),
      error:err => console.log(`error occured ${err}`),
      complete:()=> console.log('copleted')}
    );
    of(['Apple1','Apple2','Apple3']).subscribe({
      next:item=> console.log(`resulting item..${item}`),
      error:err => console.log(`error occured ${err}`),
      complete:()=> console.log('copleted')}
    );
    of('Apple1','Apple2','Apple3').subscribe({
      next:item=> console.log(`resulting item..${item}`),
      error:err => console.log(`error occured ${err}`),
      complete:()=> console.log('copleted')}
    );

    of(...['Apple1','Apple2','Apple3']).subscribe({
      next:item=> console.log(`resulting item..${item}`),
      error:err => console.log(`error occured ${err}`),
      complete:()=> console.log('copleted')}
    );
  }
}
