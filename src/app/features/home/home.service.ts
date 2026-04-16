import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_HOME_ARTICLES } from '../home/graphql/home.queries';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor(private readonly apollo: Apollo) {}

    getHomeArticles(limit = 5) {
        return this.apollo.watchQuery({
            query: GET_HOME_ARTICLES,
            variables: {
                input: {
                    limit: String(limit),
                },
            },
        }).valueChanges;
    }
}
