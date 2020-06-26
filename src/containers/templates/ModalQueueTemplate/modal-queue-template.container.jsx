import React from 'react';
import { useModalQueueState } from '../../../selectors/modal.selector';
import { Modal } from '../../../components/organisms/modal/modal';
import { modalMap } from './modal-queue-mapping';

export function ModalQueueTemplateContainer() {
    const modalQueue = useModalQueueState();
    const currentModalData = modalQueue[0];
    const hasModals = !!currentModalData;

    function getModalProps() {
        const { modalName, modalProps } = currentModalData;
        return {
            modalProps,
            contentModal: modalMap[modalName],
        };
    }

    return (
        <>
            {hasModals && <Modal {...getModalProps()} />}
        </>
    );
};
