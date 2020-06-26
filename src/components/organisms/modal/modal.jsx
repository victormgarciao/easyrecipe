import React from 'react';

export function Modal(props) {
    const { modalProps, contentModal: ContentModal } = props;
    
    return (
        <div className="ui dimmer modals page visible active">
            <div className="ui small basic test modal visible active">
                <ContentModal {...modalProps} />
            </div>
        </div>
    )
};
