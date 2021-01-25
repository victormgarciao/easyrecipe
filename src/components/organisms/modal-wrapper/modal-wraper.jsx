import React from 'react';

import { Dimmer } from '../../atoms/Dimmer/Dimmer'

export function ModalWrapper(props) {
    const { modalData, contentModal: ContentModal } = props;
    
    return (
        <Dimmer>
            <ContentModal {...modalData} />
        </Dimmer>
    )
};
