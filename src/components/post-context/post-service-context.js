import React from 'react';

const {
  Provider: PostServiceProvider,
  Consumer: PoststoreServiceConsumer
} = React.createContext();

export {
  PostServiceProvider,
  PoststoreServiceConsumer
};
