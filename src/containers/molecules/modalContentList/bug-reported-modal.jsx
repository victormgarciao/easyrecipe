import React from 'react';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { AmbulanceIcon } from '../../../components/atoms/icons/ambulanceIcon';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';
import modalQueueStore from '../../../store/modalqueue.store';


export function BugReportedModal() {
    const { closeModal } = modalQueueStore;

    return (
        <>
            <ModalHeader>
                <AmbulanceIcon customClassNames='green'/>
                <ModalTitle>Bug reported successfully.</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>Our doctors are checking the patient.</p>
            </ModalBody>
            <ModalFooter>
                <AcceptButton onClick={closeModal}>OK</AcceptButton>
            </ModalFooter>
        </>
    )
}