import React from 'react';

const customStyles = {
    root: {
        textAlign: 'center',
    },
};

export function ModalBody({children}) {
    return (
        <div className="content" style={customStyles.root}>
            {children}
        </div>
    );
}
