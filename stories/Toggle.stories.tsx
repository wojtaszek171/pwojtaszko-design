import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toggle> = (args) => {
  return (
    <Toggle
      {...args}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
};
