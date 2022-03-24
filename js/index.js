const houseDiv = document.querySelector('#house')

const addTooltip = (e) => {

    /** @type {HTMLElement} **/
    const target = e.target
    const closestElemWithTooltip = e.target.closest('[data-tooltip]')
    
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltip'
    tooltip.textContent = closestElemWithTooltip.dataset.tooltip
    document.body.append(tooltip)
    
}

const removeTooltip =  (e) => {
    
    /** @type {HTMLElement} **/
    const target = e.target
    const closestElemWithTooltip = e.target.closest('[data-tooltip]')
    const tooltip = document.querySelector('.tooltip')
    tooltip.remove()

    
}

houseDiv.addEventListener("mouseover", addTooltip)
houseDiv.addEventListener("mouseout", removeTooltip)