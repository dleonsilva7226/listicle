const renderMajorRev = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/majorRevData')
    const data = await response.json()

    const majorRevContent = document.getElementById('major-rev-container')
    let majorRev
    
    if (data) {
        majorRev = data.find((currMajorRevId) => {
            return currMajorRevId.id === requestedID
        })
    }
    if (majorRev) {//Set all of the major Rev Info
        const revImg = document.getElementById('image')
        revImg.src = majorRev.image
        const revName = document.getElementById('name')
        revName.textContent = majorRev.name + " (" + majorRev.timePeriod + ")"
        revName.style.textAlign = "center"
        revName.style.fontStyle = "italic"
        // const revTimePeriod = document.getElementById('time-period')
        // revTimePeriod.textContent = "Time Period: " + majorRev.timePeriod
        
        
        const revCountry = document.getElementById('country')
        revCountry.textContent = majorRev.country

        const revDescription = document.getElementById('description')
        revDescription.textContent = majorRev.description
        revDescription.style.textAlign = "center"
        
        const revCause = document.getElementById('cause')
        revCause.textContent = majorRev.cause
        const revOutcome = document.getElementById('outcome')
        revOutcome.textContent = majorRev.outcome

        // title stuff here
        document.title = majorRev.name
        
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No revolutionary info'
        majorRevContent.appendChild(message)

    }
}

renderMajorRev()