import { Tooltip } from './tooltip.js';

const tooltip = new Tooltip();

const button = document.querySelector('.btn');
button.addEventListener('click', (event) => tooltip.showTooltip(event));
