import React, { useState } from 'react';
import ResourceList from './ResourceList';

export  const App = () =>  {

 const [ resource , setResource ] = useState('post');
    return (
      <div className="ui container">
        <div>
          <button onClick={() => setResource('post')}>Post</button>
           <button onClick={() => setResource('todo')}>ToDO</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );

}
