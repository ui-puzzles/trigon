import { defineComponent, PropType } from 'vue';
import 'uno.css';

import { BtnColor, BtnSize } from './interface';

export const props = {
  size: {
    type: String as PropType<BtnSize>,
    default: 'medium',
  },
  color: {
    type: String as PropType<BtnColor>,
    default: 'blue',
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
} as const;

export default defineComponent({
  name: 'TButton',
  props, // register properties
  setup(props, { slots }) {
    const size = {
      mini: {
        x: '1.5',
        y: '0.75',
        text: 'mini',
      },
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    };

    return () => (
      <button
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? 'rounded-full' : 'rounded-lg'}
          bg-${props.color}-${props.plain ? '100' : '500'}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? '500' : '500'}
          border-solid
          text-${props.plain ? props.color + '-500' : 'white'}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          cursor-pointer
          mx-1
        `}
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
