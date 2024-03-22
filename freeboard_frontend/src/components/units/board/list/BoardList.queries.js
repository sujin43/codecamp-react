import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
    query {
        fetchBoards(page: 0) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`