import { gql } from 'apollo-angular';

export const LOGIN_MUTATION = gql`
    mutation Login($input: SignInInput!) {
        login(input: $input) {
            token
            user {
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
                userName
                email
            }
        }
    }
`;
