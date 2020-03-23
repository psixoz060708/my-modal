let photos = [
    {id: 1, title: 'Альберта', src:"https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg"},
    {id: 2, title: 'Бусане', src:"https://avatars.mds.yandex.net/get-pdb/1935444/60691e1b-71ae-41d5-b49d-5255b0ad2036/s1200?webp=false"},
    {id: 3, title: 'Мельница', src:"https://s1.1zoom.me/big3/531/Rivers_Geese_Grass_Watermill_566707_2560x1600.jpg"},
    {id: 4, title: 'Замок', src:"https://i.pinimg.com/originals/79/1d/19/791d19fcb387be5168ecf76f2e7e4018.jpg"},
    {id: 5, title: 'Водопад', src:"https://i.artfile.me/wallpaper/24-03-2014/3000x1971/priroda-vodopady-vodopad-skaly-tuchi-812410.jpg"},
    {id: 6, title: 'Таиланд', src:"https://s1.1zoom.me/b5050/273/Thailand_Tropics_Coast_Boats_PhraNang_Cave_Beach_527327_2880x1800.jpg"}
]
// Добавить LocalStorage

function renderAlbum() {
    let timer = 0

    photos.forEach(el => {
        setTimeout(() => {
            createAlbum(el)        
        },100 + timer)
        timer += 100
    })
}

renderAlbum() // Добавить условие если фото нету

function createAlbum(photo) {
    const item = document.createElement('div')
    item.classList.add('photo-card')
    document.querySelector('.row').append(item)

    item.insertAdjacentHTML("afterbegin", `
        <img src="${ photo.src }" alt="${ photo.title }"> 
            <div class="photo-card__header"><strong>${photo.title}</strong></div>
            <div class="photo-card__footer">
                Удалить
                <span data-del="del">&times;</span>
            </div>      
    `)
    setTimeout(() => {
        item.classList.add('card-open')
        
    }, 200);
}