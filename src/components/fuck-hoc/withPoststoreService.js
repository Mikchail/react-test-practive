import React from 'react';
import { PoststoreServiceConsumer } from '../post-context/post-service-context';

const withPoststoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <PoststoreServiceConsumer>
        {
          (fireBaseApi) => {
            return (<Wrapped {...props}
                     fireBaseApi={fireBaseApi}/>);
          }
        }
      </PoststoreServiceConsumer>
    );
  }
};

export{
    withPoststoreService
}

