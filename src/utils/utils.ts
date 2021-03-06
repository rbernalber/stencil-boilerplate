import { getAssetPath } from '@stencil/core'

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export function getSVG(url: string): Promise<string> {
  return fetch(getAssetPath(url)).then(x => x.text())
}

export function toString(value: boolean | number): string {
  return String(value)
}
