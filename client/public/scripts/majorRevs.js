const renderMajorRevs = async () => {
    const response = await fetch('/majorRevData')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    
    if (data) {
        data.map((revInfo) => {
            const card = document.createElement('div')

            const topContainer = document.createElement('div')
            const bottomContainer = document.createElement('div')

            topContainer.style.backgroundImage = `url(${revInfo.image})`
            const name = document.createElement('h3')
            name.textContent = revInfo.name
            bottomContainer.appendChild(name)
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

