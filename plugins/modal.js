Element.prototype.appendAfter = function(element) {
	element.parentNode.insertBefore(this, element.nextSibling);
}

_createModal = function(options) {
    const modal = document.createElement('div')
    const footer = _createModalButtons(options.footerButtons)

    modal.classList.add('n-modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="n-modal__overlay" data-overlay="overlay">
            <div class="n-modal__container">
                <div class="n-modal__header"> <h3>${options.title}</h3> </div>
                <div class="n-modal__body"> ${options.content} </div>
            </div>
        </div>
    `)
    footer.appendAfter(modal.querySelector('.n-modal__body'))
    
    document.body.appendChild(modal)
    return modal
}

_createModalButtons = function(buttons = []) {
    // if (buttons.length === 0) {

    // }

    const footer = document.createElement('div')
    footer.classList.add('n-modal__footer')

    buttons.forEach(btn => {
        $btn = document.createElement('button')
        $btn.innerHTML = btn.text
        $btn.classList.add('btn', btn.class)
        $btn.onclick = btn.handler

        footer.appendChild($btn)
    })

    return footer
}

$.modal = function(options) {
    const ANIMATON_SPEED = 300
    const $modal = _createModal(options)

    const modal = {
        open() {           
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide') 
                $modal.classList.remove('open')
            }, ANIMATON_SPEED)
        },
        destroy() {
            $modal.remove()
        }
    }

    $modal.addEventListener('click', (ev) => {
        if (ev.target.dataset.overlay) {
            modal.close()
            setTimeout(() => {
                modal.destroy()               
            }, ANIMATON_SPEED);
        }
    })
    
    return modal
}