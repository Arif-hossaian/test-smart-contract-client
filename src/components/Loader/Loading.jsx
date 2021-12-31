import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700" />
    </div>
  );
};

export default Loading;
