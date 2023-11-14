const primary = {
  '50': 'var(--primary-50)',
  '100': 'var(--primary-100)',
  '200': 'var(--primary-200)',
  '300': 'var(--primary-300)',
  '400': 'var(--primary-400)',
  '500': 'var(--primary-500)',
  '600': 'var(--primary-600)',
  '700': 'var(--primary-700)',
  '800': 'var(--primary-800)',
  '900': 'var(--primary-900)',
  '950': 'var(--primary-950)',
}

const secondary = {
  '50': 'var(--secondary-50)',
  '100': 'var(--secondary-100)',
  '200': 'var(--secondary-200)',
  '300': 'var(--secondary-300)',
  '400': 'var(--secondary-400)',
  '500': 'var(--secondary-500)',
  '600': 'var(--secondary-600)',
  '700': 'var(--secondary-700)',
  '800': 'var(--secondary-800)',
  '900': 'var(--secondary-900)',
  '950': 'var(--secondary-950)',
}

const positive = {
  '50': 'var(--positive-50)',
  '100': 'var(--positive-100)',
  '200': 'var(--positive-200)',
  '300': 'var(--positive-300)',
  '400': 'var(--positive-400)',
  '500': 'var(--positive-500)',
  '600': 'var(--positive-600)',
  '700': 'var(--positive-700)',
  '800': 'var(--positive-800)',
  '900': 'var(--positive-900)',
  '950': 'var(--positive-950)',
}

const negative = {
  '50': 'var(--negative-50)',
  '100': 'var(--negative-100)',
  '200': 'var(--negative-200)',
  '300': 'var(--negative-300)',
  '400': 'var(--negative-400)',
  '500': 'var(--negative-500)',
  '600': 'var(--negative-600)',
  '700': 'var(--negative-700)',
  '800': 'var(--negative-800)',
  '900': 'var(--negative-900)',
  '950': 'var(--negative-950)',
}

const warning = {
  '50': 'var(--warning-50)',
  '100': 'var(--warning-100)',
  '200': 'var(--warning-200)',
  '300': 'var(--warning-300)',
  '400': 'var(--warning-400)',
  '500': 'var(--warning-500)',
  '600': 'var(--warning-600)',
  '700': 'var(--warning-700)',
  '800': 'var(--warning-800)',
  '900': 'var(--warning-900)',
  '950': 'var(--warning-950)',
}

const neutral = {
  '50': 'var(--neutral-50)',
  '100': 'var(--neutral-100)',
  '200': 'var(--neutral-200)',
  '300': 'var(--neutral-300)',
  '400': 'var(--neutral-400)',
  '500': 'var(--neutral-500)',
  '600': 'var(--neutral-600)',
  '700': 'var(--neutral-700)',
  '800': 'var(--neutral-800)',
  '900': 'var(--neutral-900)',
  '950': 'var(--neutral-950)',
}

const disabled = {
  '50': 'var(--disabled-50)',
  '100': 'var(--disabled-100)',
  '200': 'var(--disabled-200)',
  '300': 'var(--disabled-300)',
  '400': 'var(--disabled-400)',
  '500': 'var(--disabled-500)',
  '600': 'var(--disabled-600)',
  '700': 'var(--disabled-700)',
  '800': 'var(--disabled-800)',
  '900': 'var(--disabled-900)',
  '950': 'var(--disabled-950)',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary,
        secondary, 
        positive, 
        negative, 
        warning, 
        neutral, 
        disabled
      }
    }
  }
}