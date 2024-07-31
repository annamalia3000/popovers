export class Tooltip {
    constructor() {
        this.tooltipElement = null;
    }

    showTooltip(e) {
        if (this.tooltipElement) {
            if (this.tooltipElement.style.display === 'block') {
                this.tooltipElement.style.display = 'none';
            } else {
                this.tooltipElement.style.display = 'block';
                this.positionTooltip(e.target);
            }
            return;
        }

        this.tooltipElement = document.createElement('div');
        this.tooltipElement.classList.add('tooltip');
        this.tooltipElement.style.display = 'block';

        const tooltipTitle = document.createElement('h2');
        tooltipTitle.classList.add('tooltip-title');
        tooltipTitle.textContent = 'Propover title';

        const tooltipContent = document.createElement('p');
        tooltipContent.classList.add('tooltip-content');
        tooltipContent.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

        this.tooltipElement.appendChild(tooltipTitle);
        this.tooltipElement.appendChild(tooltipContent);

        document.body.appendChild(this.tooltipElement);
        this.positionTooltip(e.target);
    }

    positionTooltip(element) {
        const { left, top } = element.getBoundingClientRect();

        this.tooltipElement.style.left = left - this.tooltipElement.offsetWidth * 0.5 + element.offsetWidth * 0.5 + 'px';
        this.tooltipElement.style.top = top - this.tooltipElement.offsetHeight  +'px';
    }
}
