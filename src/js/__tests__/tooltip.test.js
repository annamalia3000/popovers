import { Tooltip } from '../tooltip.js';

describe('Tooltip', () => {
    let tooltip;
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
        <button class="btn" type="button">Click to toggle popover</button>
        `;
        button = document.querySelector('.btn');
        tooltip = new Tooltip();
    });

    test('should create and show tooltip on button click', () => {
        button.click();
        tooltip.showTooltip({ target: button });
        
        expect(document.querySelector('.tooltip')).not.toBeNull();

        const tooltipElement = document.querySelector('.tooltip');
        expect(tooltipElement).not.toBeNull();

        expect(tooltipElement.querySelector('.tooltip-title').textContent).toBe('Propover title');
        expect(tooltipElement.querySelector('.tooltip-content').textContent).toBe(
            'And here\'s some amazing content. It\'s very engaging. Right?');
    });

    test('should toggle tooltip visibility on button clicks', () => {
        button.click();
        tooltip.showTooltip({ target: button });
        
        let tooltipElement = document.querySelector('.tooltip');
        expect(tooltipElement).not.toBeNull();
        expect(tooltipElement.style.display).toBe('block');

        button.click();
        tooltip.showTooltip({ target: button });

        tooltipElement = document.querySelector('.tooltip');
        expect(tooltipElement.style.display).toBe('none');

        button.click();
        tooltip.showTooltip({ target: button });

        tooltipElement = document.querySelector('.tooltip');
        expect(tooltipElement.style.display).toBe('block');
    });

    test('should position tooltip correctly', () => {
        tooltip.showTooltip({ target: button });

        const tooltipElement = document.querySelector('.tooltip');
        const { left, top } = button.getBoundingClientRect();
        
        expect(parseFloat(tooltipElement.style.left)).toBeCloseTo(
            left - tooltipElement.offsetWidth * 0.5 + button.offsetWidth * 0.5
        );
        expect(parseFloat(tooltipElement.style.top)).toBeCloseTo(top - tooltipElement.offsetHeight);
    });
});

