import React from 'react';
import { useModalEffects } from '../../../useEffects/modals.effects';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { AmbulanceIcon } from '../../../components/atoms/icons/ambulanceIcon';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';


export function BugReportedModal() {
    const { closeModal } = useModalEffects();

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