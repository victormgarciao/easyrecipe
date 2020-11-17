import { reportBugRequest } from "../services/bug-report.service";
import { BUG_REPORTED } from "../containers/templates/ModalQueueTemplate/modal-queue.constants";
import modalQueueStore from "../store/modalqueue.store";

function useReportErrorLink() {
    const { addModal, closeModal } = modalQueueStore;

    function doAfterReport() {
        closeModal();
        addModal({ name: BUG_REPORTED });
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