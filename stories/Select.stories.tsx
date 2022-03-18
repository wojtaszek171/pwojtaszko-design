import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) =>  <div style={{ width: 100 }}>
    <Select {...args} />
  </div>;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      item: 'Option 1',
      key: 'op1'
    },
    {
      item: 'Option 2',
      key: 'op2'
    },
    {
      item: 'Option 3',
      key: 'op3'
    }
  ]
};
