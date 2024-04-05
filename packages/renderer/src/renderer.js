import { createElement } from 'react';
import * as blocks from './blocks';

export default function renderer(block) {
  if (!block) return null;
  if (Array.isArray(block)) return block.map(renderer);
  if (typeof block === 'string') return block;

  const component = blocks[block.type];
  if (!component) throw new Error(`Unknown component: ${block.type}`);

  return createElement(component, block.props, ...[renderer(block.children)].flat());
}
