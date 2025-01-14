import React from 'react'; 
import { fetchCurrentUserLikeIds, fetchLikedMembers } from '../actions/likeAction';
import ListTab from './ListTab'; 


const ListPage = async ({
  searchParams,
}: {
  searchParams: {type: string}
}) => {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(
    searchParams.type
  ); 

  return (
    <div>
        <ListTab
          members={members}
          likeIds={likeIds}
        />
    </div>
  )
}

export default ListPage; 