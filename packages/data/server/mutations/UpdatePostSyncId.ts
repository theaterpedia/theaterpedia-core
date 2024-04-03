import { gql } from '@apollo/client/core';

export default gql`
    mutation UpdateSyncId($post: UpdateSyncIdInput!) {
        updatePost(post: $post) {
            id
            name
            blocks
            metaTitle
            subtitle
            syncId
            teaserText
        }
    }
`;