import { Component }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomeComponent {
  // Class variables
  games:  any;
  gamesClone: any;
  routeParams: any;

  // Filter and Sort
  sortOrder: any;
  filterBy: any;
  filterEnabled: boolean = false;

  platforms: any = [];

  totalResults: string;
  filteredResults: string;
  queryParam: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParamMap.subscribe((response: any) => {
      this.routeParams = response.params;

      this.route.data.subscribe((response: any) => {
        this.games = response.games;
        this.gamesClone = response.games;
        this.totalResults = `${this.gamesClone.length}`;
        this.getUniquePlatforms(this.games);
  
        if(_.get(this.routeParams,'query')) {
          this.queryParam = _.get(this.routeParams, 'query');
          this.games = _.filter(this.games, (obj)=> {
            return obj['title'] === this.queryParam;
          });
        }
        this.filteredResults = this.games.length;
        this.totalResults = this.games.length;
      });
    });
  }

  getUniquePlatforms(games: any) {
    _.each(this.games, (obj) => {
      this.platforms.push(_.get(obj, 'platform'));
    });
    this.platforms= _.uniq(this.platforms);
  }

  sort() {
    if(this.sortOrder === '1') {
      this.games = _.sortBy(this.games, (obj) => {
        return obj['score'];
      });
    } else if(this.sortOrder === '2') {
      this.games = _.sortBy(this.games, (obj) => {
        return obj['score'];
      });
      this.games = this.games.reverse();
    } else {
      this.games = _.sortBy(this.games, (obj) => {
        return obj['platform'];
      });
    }
  }

  filter() {
    this.games = _.filter(this.gamesClone, (obj) => {
      return obj['platform'] === this.filterBy;
    });
    this.filteredResults = this.games.length;
    this.filterEnabled = true;
  }

  resetFilter() {
    window.location.href = '/';
  }
}
