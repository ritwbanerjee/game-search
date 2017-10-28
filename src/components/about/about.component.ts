import { Component }            from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'about',
  templateUrl: './about.html'
})

export class AboutComponent {
  private sayHello:         any;

  constructor(
    private route: ActivatedRoute
  ) {
    console.log('About component');

    this.route.data.subscribe((response: any) => {
      console.log('response: ', response);
      if (_.get(response, 'sayHello')) {
        this.sayHello = _.get(response, 'sayHello');
        console.log(this.sayHello);
      }
    });
  }
}
