import { gql } from 'apollo-angular';

export const GET_HOME_ARTICLES = gql`
    query GetHomeArticles($input: PaginatedArticle!) {
        getArticles(input: $input) {
            id
            title
            slug
            shortDescription
            coverImage
            readingTime
            createdAt
            author {
                id
                userName
            }
        }
    }
`;
