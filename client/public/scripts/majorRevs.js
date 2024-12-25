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

            
            const moreInfoBtn = document.createElement('button')
            moreInfoBtn.textContent = "More Info"
            hiddenContent.appendChild(moreInfoBtn)

            topContainer.style.backgroundImage = `url(${revInfo.image})`

            // Event listener for topContainer. WEIRD ISSUE WITH THEM
            card.addEventListener("mouseover", function() {
                topContainer.appendChild(hiddenContent)
            })

            topContainer.addEventListener("mouseover", function() {
                topContainer.appendChild(hiddenContent)
            })

            card.addEventListener("mouseout", function () {
                topContainer.removeChild(hiddenContent)
            })

            topContainer.addEventListener("mouseout", function () {
                topContainer.removeChild(hiddenContent)
            })

            // ISSUE WITH EVENT LISTENERS ABOVE
            
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

