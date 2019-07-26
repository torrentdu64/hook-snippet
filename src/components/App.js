import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

export  const App = () =>  {

 const [ resource , setResource ] = useState('posts');
    return (
      <div className="ui container">
      <UserList />
      =============
        <div>
          <button onClick={() => setResource('posts')}>Post</button>
           <button onClick={() => setResource('todos')}>ToDO</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );

}
