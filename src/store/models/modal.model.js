const { types } = require("mobx-state-tree");


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


export default ModalModel;