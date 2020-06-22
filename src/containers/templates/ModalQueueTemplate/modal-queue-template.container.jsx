import React from 'react';
import { useModalQueueState } from '../../../selectors/modal.selector';
import { Modal } from '../../../components/organisms/modal/modal';
import { modalMap } from './modal-queue-mapping';

export function ModalQueueTemplateContainer() {
    const modalQueue = useModalQueueState();
    const currentModalData = modalQueue[0];
    const hasModals = !!currentModalData;
    
    function getContentModal() {
        const { modalName } = currentModalData;
        return modalMap[modalName];
    }

    return (
        <>
        {hasModals && (
            <Modal
                currentModalData={currentModalData}
                contentModal={getContentModal()}
            />
        )}
        </>
    );
};