import React from 'react';

export function Modal(props) {
    const { currentModalData, contentModal } = props;
    const { modalName, modalProps } = currentModalData;
    const ContentModal = contentModal;
    
    return (
        <div className="ui dimmer modals page visible active">
            <div className="ui small basic test modal visible active">
                <ContentModal
                    modalName={modalName}
                    {...modalProps}
                />
            </div>
        </div>
    )
}