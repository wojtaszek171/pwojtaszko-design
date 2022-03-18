import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Register } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Register',
  component: Register,
} as ComponentMeta<typeof Register>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Register> = (args) => <Register {...args} />;

export const Default = Template.bind({});
Default.args = {
};
