const renderMajorRevs = async () => {
    
    const response = await fetch('/majorRevData')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    mainContent.classList.add('main')
    
    if (data) {
        data.map((revInfo) => {
            const card = document.createElement('article')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            bottomContainer.classList.add('blurb')
            // const title = document.createElement('h7')
            // title.textContent = revInfo.name
            // const image = document.createElement('img')
            // image.src = revInfo.image
            // topContainer.appendChild(title)
            // topContainer.appendChild(image)
            topContainer.style.backgroundImage = `url(${revInfo.image})`
            
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

