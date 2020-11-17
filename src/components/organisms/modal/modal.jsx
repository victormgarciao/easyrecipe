import React from 'react';

export function Modal(props) {
    const { modalData, contentModal: ContentModal } = props;
    
    return (
        <div className="ui dimmer modals page visible active">
            <div className="ui small basic test modal visible active">
                <ContentModal {...modalData} />
            </div>
        </div>
    )
};
