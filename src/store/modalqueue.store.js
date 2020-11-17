import { values } from "mobx";
import { onPatch, types } from "mobx-state-tree";
import { cond, isEmpty } from "ramda";
import { addBodyStylesForModalInDom, restoreBodyStylesInDom } from "../services/dom.service";
import { isOneElement } from "../utils/common.utils";

const ModalData = types
    .model('ModalDataModel', {
        link: types.optional(types.string, ''),
    });

const ModalModel = types
    .model('ModalModel', {
        name: types.string,
        data: types.optional(ModalData, {}),
    })
;

const ModalQueueModel = types
    .model('ModalQueueModel', {
        queue: types.array(ModalModel),
    })

    .actions((self) => {
       return {
            addModal(newModal) {
                cond([ [ isEmpty, addBodyStylesForModalInDom ] ])(self.modalQueue);
                self.queue.push(newModal)
            },

            closeModal() {
                cond([ [ isOneElement, restoreBodyStylesInDom ] ])(self.modalQueue)
                self.queue.shift();
            },
       } 
    })

    .views((self) => {
        return {
            get modalQueue() {
                return values(self.queue);
            },

            get currentModal() {
                return self.modalQueue[0];
            },

            get hasModals() {
                return !!self.currentModal;
            }
        }
    })
;

const modalQueueStore = ModalQueueModel.create();

onPatch(modalQueueStore, patch => {
    console.log('from modalQueue', patch);
    // localStorage.setItem('boxes', JSON.stringify(values(store.boxes)));
});

export default modalQueueStore;