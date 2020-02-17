import React from 'react';
import Share from './Share';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';

const ShareContainer = () => {
  return (
    <Query query={ALL_TAGS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!`;

        let tags = data.tags.map(tag => {
          return {
            title: tag.title,
            id: tag.id
          }
        })
        return <Share tags={tags} />
      }}
    </Query>
  )
}

export default ShareContainer;
