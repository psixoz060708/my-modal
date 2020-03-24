const modalAddOptions = {
    title: 'Добавить новое фото',
    content: `
    <input class="new-card-header form-control" placeholder="Image title"></input>
    <input class="img-href form-control" placeholder="Image URL"></input>
    `,
    footerButtons: [
        { text: 'Добавить', class: 'btn-primary', id: 'add', handler: () => addPhoto()},
        { text: 'Отмена', class: 'btn-danger', id: 'cancel', handler: () => modal.close()},

    ]
}

function addPhoto() {
    let imgHref = document.querySelector('.img-href')
    let cardHeader = document.querySelector('.new-card-header')
    const newPhotoCard = {
        id: Date.now(), 
        title: cardHeader.value, 
        src: imgHref.value
    }


    if (inputCheck(imgHref) == true && inputCheck(cardHeader) == true) {
        if (isValidUrl(imgHref) == true) {
            photos.push(newPhotoCard)
            localStorage.setItem('photos', JSON.stringify(photos))
            
            imgHref.value = ''
            cardHeader.value = ''
            
            createAlbum(newPhotoCard)
        }
    }  
}

function inputCheck(input) {
    if (input.value.replace(/\s/g,'')=='') {
        input.classList.add('empty-input')
        return false
    }
    input.classList.remove('empty-input')
    return true
}

function isValidUrl(url) {
  const objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    if (objRE.test(url.value) == false) {
        url.classList.add('empty-input')
        return false
    }
    
  return true
}