import { Query } from 'react-apollo';
import React from 'react';
import { VIEWER_QUERY } from '../apollo/queries';

const ViewerContext = React.createContext();

const ViewerProvider = ({ children }) => {

  return <Query query={VIEWER_QUERY}>
    {({ data, loading }) => {

      const viewer = data ? data.viewer : null;
      if (loading) {
        console.log("loading")
      } else if (data) { console.log("viewer", data) }
      return (
        <ViewerContext.Provider value={{ viewer, loading }}>
          {children}
        </ViewerContext.Provider>
      );
    }}

  </Query>
};

export { ViewerProvider };
export default ViewerContext;
