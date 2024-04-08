import { gql } from '@apollo/client/core';

export default gql`
    mutation UpdatePostSyncId($post: UpdateSyncIdInput!) {
        updatePostSyncId(post: $post) {
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