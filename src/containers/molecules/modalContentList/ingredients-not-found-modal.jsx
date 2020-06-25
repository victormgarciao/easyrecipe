import React from 'react';
import { useModalEffects } from '../../../useEffects/modals.effects';
import { useErrorEffects } from '../../../useEffects/errors.effects';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { CancelButton } from '../../../components/molecules/Buttons/cancel-button';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { BugIcon } from '../../../components/atoms/icons/bugIcon';
import { Link } from '../../../components/atoms/Link/link';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';

export function IngredientsNotFoundModal(props) {
    const { link } = props;

    const { closeModal } = useModalEffects();
    const { reportErrorLink } = useErrorEffects();

    function reportError() {
        reportErrorLink(link);
    }

    return (
        <>
            <ModalHeader>
                <BugIcon customClassNames='red'/>
                <ModalTitle>Is it a recipes website?</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>We could not find a list with ingredients. If you think it is an error, you can report it and we wil check it.</p>
                <Link href={link}>{link}</Link>
            </ModalBody>
            <ModalFooter>
                <CancelButton onClick={closeModal}>No, thanks</CancelButton>
                <AcceptButton onClick={reportError}>Report a bug</AcceptButton>
            </ModalFooter>
        </>
    )
}