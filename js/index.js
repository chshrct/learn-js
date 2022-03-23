const addTooltip = (e) => {
    if (typeof (e.target.dataset.tooltip) !== 'string') return
    const button = e.target
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    document.body.prepend(tooltip);

    const buttonClientRect = button.getBoundingClientRect();
    const tooltipClientRect = tooltip.getBoundingClientRect();


    (buttonClientRect.top < tooltipClientRect.height + 5)
        ? tooltip.style.top = `${buttonClientRect.bottom + 5}px`
        : tooltip.style.top = `${buttonClientRect.top - tooltipClientRect.height - 5}px`;

    (buttonClientRect.width / 2 + buttonClientRect.left > tooltipClientRect.width / 2)
        ? tooltip.style.left = `${(buttonClientRect.width / 2 + buttonClientRect.left) - (tooltipClientRect.width / 2)}px`
        : tooltip.style.left = `${buttonClientRect.left}px`;
}
const removeTooltip = (event) => {
    if (typeof (event.target.dataset.tooltip) !== 'string') return
    document.querySelector('.tooltip').remove()
}


document.addEventListener('mouseover', addTooltip)
document.addEventListener('mouseout', removeTooltip)