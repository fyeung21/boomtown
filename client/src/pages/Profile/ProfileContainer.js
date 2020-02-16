import React from 'react';
import Profile from './Profile';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import ViewerContext from '../../context/ViewerProvider';

const ProfileContainer = () => {
  return (
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
        console.log("viewer consumer", viewer, loading);
        if (loading) return null;
        if (viewer) {
          const { id } = viewer
          return (
            <Query query={ALL_USER_ITEMS_QUERY} variables={{ id }}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error!`;
                return <Profile items={data.user.items} />
              }}
            </Query>
          )
        }
      }}
    </ViewerContext.Consumer>
  );
}

export default ProfileContainer;
