const renderMajorRevs = async () => {
    
    const response = await fetch('/majorRevData')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    mainContent.classList.add('main')
    
    if (data) {
        data.map((revInfo) => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            bottomContainer.classList.add('blurb')

            const hiddenContent = document.createElement('div')
            hiddenContent.classList.add('hidden-content')
            const revTitle = document.createElement('div')
            revTitle.textContent = revInfo.name
            hiddenContent.appendChild(revTitle)

            
            const moreInfoLink = document.createElement('a')
            moreInfoLink.textContent = "More Info"
            moreInfoLink.href = `/majorRevData/${revInfo.id}`
            moreInfoLink.setAttribute('role', 'button')
            hiddenContent.appendChild(moreInfoLink)
            

            topContainer.style.backgroundImage = `url(${revInfo.image})`

            // Occurs when hovering over cards
            card.addEventListener("mouseenter", function() {
                hiddenContent.style.opacity = 0
                hiddenContent.style.transition = `opacity 3s ease`
                hiddenContent.style.opacity = 1
                topContainer.appendChild(hiddenContent)
                card.style.filter = `brightness(0.5)`
                // hiddenContent.style.filter = `brightness(2)`
            })

            // Occurs when not hovering over cards
            card.addEventListener("mouseleave", function () {
                hiddenContent = setTimeout(() => {
                    topContainer.removeChild(hiddenContent)
                    card.style.filter = `brightness(100%)`
                }, 500)
            })
            
            const description = document.createElement('div')
            description.textContent = revInfo.description
            bottomContainer.appendChild(description)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = "Sorry. No Revolutionary Info" 
        console.log("Bad info")
        mainContent.appendChild(message)

    }

}


// 404 Page Error

const requestedURL = window.location.href.split('/').pop()
if (requestedURL) {
    window.location.href = `../404.html`
} else {
    renderMajorRevs()
}

