import React, { useState } from 'react';
import ResourceList from './ResourceList';

export  const App = () =>  {

 const [ resource , setResource ] = useState('posts');
    return (
      <div className="ui container">
        <div>
          <button onClick={() => setResource('posts')}>Post</button>
           <button onClick={() => setResource('todos')}>ToDO</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );

}
