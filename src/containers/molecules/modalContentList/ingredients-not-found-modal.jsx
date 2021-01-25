import React from 'react';
import { Modal } from '../../../components/atoms/modal/modal';
import { ModalHeader } from '../../../components/atoms/modal/header/modal-header';
import { ModalBody } from '../../../components/atoms/modal/body/modal-body';
import { ModalFooter } from '../../../components/atoms/modal/footer/modal-footer';
import { CancelButton } from '../../../components/molecules/Buttons/cancel-button';
import { AcceptButton } from '../../../components/molecules/Buttons/accept-button';
import { BugIcon } from '../../../components/atoms/icons/bugIcon';
import { Link } from '../../../components/atoms/Link/link';
import { ModalTitle } from '../../../components/atoms/modal/title/modal-title';
import modalQueueStore from '../../../store/modalqueue.store';
import { reportBugRequest } from '../../../services/bug-report.service';
import { BUG_REPORTED, BUG_REPORTED_FAIL } from '../../templates/ModalQueueTemplate/modal-queue.constants';
import { cond } from 'ramda';
import { ifNot } from '../../../utils/common.utils';

export function IngredientsNotFoundModal(props) {
    const { link } = props;

    const { closeModal, addModal } = modalQueueStore;


    function reportError() {
        reportBugRequest({
            title: '[EXTERNAL BUG] - Ingredients not found on link',
            body: link,
        })
            .then(handleRequest);
    };


    function handleRequest(request) {
        function isSuccess() { return request.status < 400 };
        request
            .addEventListener(
                'load',
                cond([
                    [ isSuccess, displayReportSuccess ],
                    [ ifNot, displayReportFail ]
                ]),
            )
        ;
    };


    function displayReportSuccess() {
        closeModal();
        addModal({ name: BUG_REPORTED });
    };


    function displayReportFail() {
        closeModal();
        addModal({ name: BUG_REPORTED_FAIL });
    };
    

    return (
        <Modal>
            <ModalHeader>
                <BugIcon classes='-red'/>
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
        </Modal>
    )
}