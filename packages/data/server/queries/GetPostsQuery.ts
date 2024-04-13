import { gql } from '@apollo/client/core';

export default gql`
query(
  $filter: PostFilterInput
  $currentPage: Int
  $pageSize: Int = 0
  $search: String
  $sort: PostSortInput
) {
  posts(
    filter: $filter
    currentPage: $currentPage
    pageSize: $pageSize
    search: $search
    sort: $sort
  ) {
    totalCount 
    posts {
      name
      seoName
      subtitle
      isPublished
      writeDate
      id
      blocks
      syncId
      author { name }
      blog {name}
      metaTitle
      metaKeywords
      metaDescription
    }
  }
}
`;