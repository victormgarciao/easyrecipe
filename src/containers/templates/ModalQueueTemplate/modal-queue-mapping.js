import { INGREDIENTS_NOT_FOUND, BUG_REPORTED } from './modal-queue.constants';
import { IngredientsNotFoundModal } from '../../molecules/modalContentList/ingredients-not-found-modal';
import { BugReportedModal } from '../../molecules/modalContentList/bug-reported-modal';

export const modalMap = {
    [INGREDIENTS_NOT_FOUND]: IngredientsNotFoundModal,
    [BUG_REPORTED]: BugReportedModal,
};
