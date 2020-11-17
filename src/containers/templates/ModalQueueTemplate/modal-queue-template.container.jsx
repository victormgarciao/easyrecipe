import React from 'react';
import { observer } from 'mobx-react';
import { Modal } from '../../../components/organisms/modal/modal';
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
            {hasModals && <Modal {...getModalProps()} />}
        </>
    );
};

export default observer(ModalQueueTemplateContainer);
