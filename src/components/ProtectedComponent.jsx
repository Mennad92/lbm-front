import React from 'react';

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>This page is only visible to authenticated users.</p>
    </div>
  );
};

export default ProtectedComponent;
