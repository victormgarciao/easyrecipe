import { reportBugRequest } from "../services/bug-report.service";
import { useModalEffects } from "./modals.effects";
import { BUG_REPORTED } from "../containers/templates/ModalQueueTemplate/modal-queue.constants";

function useReportErrorLink() {
    const { addModal, closeModal } = useModalEffects();

    function doAfterReport() {
        closeModal();
        addModal({ modalName: BUG_REPORTED });
    }

    return function(link) {
        reportBugRequest({
            title: '[EXTERNAL BUG] - Ingredients not found on link',
            body: link,
        }).then(doAfterReport)
    }
}

export function useErrorEffects() {
    const reportErrorLink = useReportErrorLink();
    return { reportErrorLink };
}