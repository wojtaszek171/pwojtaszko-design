import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
};
