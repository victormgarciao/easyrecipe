import React from 'react';
import { observer } from 'mobx-react';
import { ModalWrapper } from '../../../components/organisms/modal-wrapper/modal-wraper';
import modalQueueStore from '../../../store/modalqueue.store';
import { modalMap } from './modal-queue-mapping';

function ModalQueueTemplateContainer() {
    const { hasModals, currentModal } = modalQueueStore; 

    function getModalProps() {
        const { name: modalName, data: modalData } = currentModal;
        return {
            modalData,
            contentModal: modalMap[modalName],
        };
    }

    return (
        <>
            {hasModals && <ModalWrapper {...getModalProps()} />}
        </>
    );
};

export default observer(ModalQueueTemplateContainer);
