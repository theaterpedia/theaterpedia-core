import { gql } from '@apollo/client/core';

export default gql`
    mutation UpdatePost($post: UpdatePostInput!) {
        updatePost(post: $post) {
            id
            name
            blocks
            metaTitle
            subtitle
            syncId
            teasertext
        }
    }
`;