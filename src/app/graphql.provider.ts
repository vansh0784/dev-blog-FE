import { inject, ApplicationConfig } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

const URI = 'https://dev-blog-be.onrender.com/graphql';

export function apolloOptionsFactory() {
    const httpLink = inject(HttpLink);

    return {
        link: httpLink.create({ uri: URI }),
        cache: new InMemoryCache(),
    };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
    Apollo,
    {
        provide: APOLLO_OPTIONS,
        useFactory: apolloOptionsFactory,
    },
];
