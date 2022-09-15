import Button from '../Button';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
  test('mount @vue/test-utils', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });

    expect(wrapper.text()).toBe('Button');
  });
});

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true);
  });

  test('added red props', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
      props: {
        color: 'red',
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true);
  });
});
