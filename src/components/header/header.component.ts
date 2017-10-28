import { Component }                    from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import * as _                           from 'lodash';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class HeaderComponent {

  private games: any;
  private gamesList: any;
  private searchKeyword: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((response: any) => {
      this.games = response.games;
      this.gamesList = _.keyBy(this.games, (obj) => {
        return obj['title'];
      });
      for(var i=0; i<this.gamesList.length; i++ ) {
        this.gamesList[i] = null;
      }
    });
  }

  ngAfterViewInit() {
    $('input.autocomplete').autocomplete({
      data: this.gamesList,
      limit: 5,
      minLength: 0,
      onAutocomplete: (val) => {
        this.setSearchTerm(val);
      }
    });
  }

  setSearchTerm(val: any) {
    this.router.navigate(['/home'], {
      queryParams: {
        query: val
      }
    })
  }

  navigateToHome() {
    window.location.href = '/';
  }

  searchResult() {
    console.log('searchResult: ', this.searchKeyword);
    this.setSearchTerm(this.searchKeyword);
  }
}
