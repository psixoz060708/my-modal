const modalAddOptions = {
    title: 'Добавить новое фото',
    content: `
    <input class="img-href form-control" placeholder="Image URL"></input>
    <input class="new-card-header form-control" placeholder="Image title"></input>
    `,
    footerButtons: [
        { text: 'Добавить', class: 'btn-primary', id: 'add', handler: () => addPhoto()},
        { text: 'Отмена', class: 'btn-danger', id: 'cancel', handler: () => modal.close()},

    ]
}

function addPhoto() {
    const imgHref = document.querySelector('.img-href').value
    const cardHeader = document.querySelector('.new-card-header').value
    const newPhotoCard = {id: Date.now(), title: cardHeader, src: imgHref}

    photos.push(newPhotoCard)
    createAlbum(newPhotoCard)
}