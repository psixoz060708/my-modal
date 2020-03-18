$.deleteModal = function(options) {
    const $deleteModal = _createModal(options)


    const deleteModal = {
        delete() {
            console.log('Удалить')
        }
    }


    const listener = () => {
        if (event.target.dataset.btn == '') {
            modal.delete()
        }
    }


    return deleteModal

}