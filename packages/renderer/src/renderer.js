import { createElement } from 'react';

export default class Renderer {
  #components;

  constructor(components) {
    this.#components = components;
  }

  render(block) {
    if (!block) return null;
    if (Array.isArray(block)) return block.map(this.render.bind(this));
    if (typeof block === 'string') return block;
  
    const component = this.#components[block.type];
    if (!component) throw new Error(`Unknown component: ${block.type}`);
  
    return createElement(component, block.props, ...[this.render(block.children)].flat());
  }
}
