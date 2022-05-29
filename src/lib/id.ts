import { Rule, Element } from './types'
export function id(query: Rule, element: Element): boolean {
  return Boolean(element.attributes && element.attributes.id === query.id)
}
