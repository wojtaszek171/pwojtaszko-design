import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer
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
  middle: options,
  right: options
}
