import React from 'react';

const RenderIf = ({condition, children}) => {
    if (condition){
        return children;
    } else {
        return null;
    }
};

export default RenderIf;
