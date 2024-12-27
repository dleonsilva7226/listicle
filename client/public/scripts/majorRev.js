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
        revName.textContent = majorRev.name
        const revTimePeriod = document.getElementById('time-period')
        revTimePeriod.textContent = "Time Period: " + majorRev.timePeriod
        const revDescription = document.getElementById('description')
        revDescription.textContent = "Description: " + majorRev.description
        const revCountry = document.getElementById('country')
        revCountry.textContent = "Location: " + majorRev.country
        const revCause = document.getElementById('cause')
        revCause.textContent = "Cause: " + majorRev.cause
        const revOutcome = document.getElementById('outcome')
        revOutcome.textContent = "Outcome: " + majorRev.outcome
        
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No revolutionary info'
        majorRevContent.appendChild(message)

    }
}

renderMajorRev()