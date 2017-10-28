import { Component, Input }                    from '@angular/core';
import { ActivatedRoute, Router}        from '@angular/router';

@Component({
    selector: 'card-component',
    templateUrl: './card.html',
    styleUrls: ['./card.scss']
})

export class CardComponent {

    private games: any;
    @Input('game') game: any;

    constructor(
        private route: ActivatedRoute
    ) {
        this.route.data.subscribe((response: any) => {
            this.games = response.games;
        })
    }

    ngOnInit() {
    }
}