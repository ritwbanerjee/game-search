import { Component }                    from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  constructor() {
    console.log('footer loaded');
  }
}