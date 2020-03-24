const modalDelOptions = {
    title: 'Удалить фото?',
    content: '',
    footerButtons: [
        { text: 'Да', class: 'btn-danger', id: 'del', handler: () => deletePhoto()},
        { text: 'Нет', class: 'btn-primary', id: 'cancel', handler: () => modal.close()},
    ]
}

function deletePhoto(photoCard) {
    const delBtn = document.querySelector('#del')
   
    delBtn.addEventListener('click', () => {
        let newPhotoArr = []

        photos.forEach(element => {
            if (+element.id !== +photoCard.id) {
                newPhotoArr.push(element)
            }
        });
        photos = newPhotoArr
        localStorage.setItem('photos', JSON.stringify(photos))

        photoCard.remove()    
        modal.close()
    })
}