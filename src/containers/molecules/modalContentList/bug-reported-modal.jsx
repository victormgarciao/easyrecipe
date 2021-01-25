import React from 'react';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { DoctorIcon } from '../../../components/atoms/icons/doctorIcon';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';
import modalQueueStore from '../../../store/modalqueue.store';
import { Modal } from '../../../components/atoms/modal/modal';


export function BugReportedModal() {
    const { closeModal } = modalQueueStore;

    return (
        <Modal>
            <ModalHeader>
                <DoctorIcon classes='-green'/>
                <ModalTitle>Bug reported successfully.</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>Our doctors are checking the patient.</p>
            </ModalBody>
            <ModalFooter>
                <AcceptButton onClick={closeModal}>OK</AcceptButton>
            </ModalFooter>
        </Modal>
    )
};
