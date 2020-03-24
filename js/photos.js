let photos = JSON.parse(localStorage.getItem('photos')) || []

function createAlbum(photo) {
    const { id, src, title } = photo

    const item = document.createElement('div')
    item.classList.add('photo-card')
    item.id = id
    document.querySelector('.row').append(item)

    item.insertAdjacentHTML("afterbegin", `
        <img src="${ src }" alt="${ title }"> 
            <div class="photo-card__header"><strong>${title}</strong></div>
            <div class="photo-card__footer">
                <span data-del="del"> Удалить </span>
                <span data-del="del">&times;</span>
            </div>      
    `)
    setTimeout(() => {
        item.classList.add('card-open')
        
    }, 200);
}

function renderAlbum() {
    let timer = 0

    photos.forEach(el => {
        setTimeout(() => {
            createAlbum(el)        
        },100 + timer)
        timer += 100
    })
}

renderAlbum() 
