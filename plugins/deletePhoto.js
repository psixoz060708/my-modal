const modalDelOptions = {
    title: 'Удалить фото?',
    content: '',
    footerButtons: [
        { text: 'Да', class: 'btn-danger', id: 'del', handler: () => deletePhoto()},
        { text: 'Нет', class: 'btn-primary', id: 'cancel', handler: () => modal.close()},
    ]
}

function deletePhoto(photoCard) {
    delBtn = document.querySelector('#del')
    
    delBtn.addEventListener('click', () => {
        photoCard.remove()
        modal.close()
    })

}