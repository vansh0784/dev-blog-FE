import { gql } from 'apollo-angular';

export const LOGIN_MUTATION = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            token
            user {
                id
                userName
                email
            }
        }
    }
`;

export const SIGNUP_MUTATION = gql`
    mutation Signup($input: SignupInput!) {
        signup(input: $input) {
            token
            user {
                id
                userName
                email
            }
        }
    }
`;
