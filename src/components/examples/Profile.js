import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile(props) {
  const params = useParams();
  console.log('params', params);
  console.log('props', props);

  return (
    <div>
      <h1>Profile page for {params.id}</h1>
    </div>
  );
}
