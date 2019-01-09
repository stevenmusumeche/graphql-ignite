import React from 'react';
import { Heading } from 'spectacle';

export default ({children}) => (
  <div style={{position: 'absolute', top: -40, width: '100%', textAlign: 'center'}}>
    <Heading>{children}</Heading>
  </div>
)