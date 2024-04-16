import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

export default class Renderer {
  #components;

  constructor(components) {
    this.#components = components;
  }

  render(block) {
    if (!block) return null;
    if (Array.isArray(block)) return jsxs(Fragment, { children: block.map(this.render.bind(this)) });
    if (typeof block === 'string') return block;
  
    const component = this.#components[block.type];
    if (!component) throw new Error(`Unknown component: ${block.type}`);
  
    const { children, ...props } = block.props || {};
    return jsx(component, { ...props, children: this.render(children) });
  }
}
