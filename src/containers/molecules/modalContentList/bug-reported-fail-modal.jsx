import React from 'react';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';
import modalQueueStore from '../../../store/modalqueue.store';
import { Link } from '../../../components/atoms/Link/link';
import { Modal } from '../../../components/atoms/modal/modal';
import { DoctorIcon } from '../../../components/atoms/icons/doctorIcon';


export function BugReportedModalFail() {
    const { closeModal } = modalQueueStore;

    return (
        <Modal>
            <ModalHeader>
                <DoctorIcon classes='-red'/>
                <ModalTitle>Something went wrong!</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>Apparently something went wrong when we were trying to report this issue.</p>
                <p>If you still want to report this, you can do it manually by this link <Link href='https://github.com/victormgarciao/easyrecipe/issues' target='_blank'>Report manually</Link></p>
            </ModalBody>
            <ModalFooter>
                <AcceptButton onClick={closeModal}>OK</AcceptButton>
            </ModalFooter>
        </Modal>
    )
}
