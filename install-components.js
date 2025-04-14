const { execSync } = require('child_process');

const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'button',
  'calendar',
  'card',
  'checkbox',
  'collapsible',
  'command',
  'context-menu',
  'dialog',
  'dropdown-menu',
  'form',
  'hover-card',
  'input',
  'label',
  'menubar',
  'navigation-menu',
  'popover',
  'progress',
  'radio-group',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'skeleton',
  'slider',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'tooltip'
];

console.log('Installing shadcn/ui components...\n');

components.forEach((component) => {
  try {
    console.log(`Installing ${component}...`);
    execSync(`npx shadcn-ui@latest add ${component} --yes`, { stdio: 'inherit' });
    console.log(`✓ Installed ${component}\n`);
  } catch (error) {
    console.error(`✕ Failed to install ${component}\n`);
  }
}); 