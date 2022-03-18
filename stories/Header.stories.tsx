import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => (
  <Header
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
};

const options = {
  table: {
    type: {
      summary: 'React.ReactNode'
    }
  },
  control: {
    type: 'select',
    options: {
      default: [],
      one: <span>span1</span>,
      two: <><span>span1</span><span>span2</span></>,
      three: <><span>span1</span><span>span2</span><span>span3</span></>
    }
  }
};

Default.argTypes = {
  left: options,
  right: options,
  dropdownElements: {
    control: {
      type: 'select',
      options: {
        default: [],
        dropdown: [
          {
            item: <span>option1</span>,
            onClick: () => { console.log('op1'); },
            key: 'op1'
          },
          {
            item: <span>option2</span>,
            onClick: () => {},
            key: 'op2'
          }
        ]
      }
    }
  }
}
