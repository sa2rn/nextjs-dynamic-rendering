import { createElement } from 'react';
import * as components from '@/components';

export default function renderer(block) {
  if (!block) return null;
  if (Array.isArray(block)) return block.map(renderer);
  if (typeof block === 'string') return block;

  const component = components[block.type];
  if (!component) throw new Error(`Unknown component: ${block.type}`);

  return createElement(component, block.props, ...[renderer(block.children)].flat());
}
