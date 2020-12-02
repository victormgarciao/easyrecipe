import { INGREDIENTS_NOT_FOUND, BUG_REPORTED, BUG_REPORTED_FAIL } from './modal-queue.constants';
import { IngredientsNotFoundModal } from '../../molecules/modalContentList/ingredients-not-found-modal';
import { BugReportedModal } from '../../molecules/modalContentList/bug-reported-modal';
import { BugReportedModalFail } from '../../molecules/modalContentList/bug-reported-fail-modal';

export const modalMap = {
    [INGREDIENTS_NOT_FOUND]: IngredientsNotFoundModal,
    [BUG_REPORTED]: BugReportedModal,
    [BUG_REPORTED_FAIL]: BugReportedModalFail,
};
