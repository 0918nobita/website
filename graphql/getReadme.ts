import { gql } from '@apollo/client';

export const GET_README = gql`
    query GetReadme {
        repository(owner: "0918nobita", name: "vision") {
            content: object(expression: "master:README.md") {
                ... on Blob {
                    text
                }
            }
        }
    }
`;
