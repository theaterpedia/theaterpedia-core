import { gql } from '@apollo/client/core';

export default gql`
query(
  $filter: EventFilterInput
  $currentPage: Int
  $pageSize: Int = 0
  $search: String
  $sort: EventSortInput
) {
  events(
    filter: $filter
    currentPage: $currentPage
    pageSize: $pageSize
    search: $search
    sort: $sort
  ) {
    totalCount
    minDate
    maxDate    
    events {
      overline
      headline
      teasertext
      writeDate
      stage { name, description }
      id
      dateBegin
      dateEnd
      eventType { name, seatsMax }
      blocks
      syncId
    }
  }
}
`;