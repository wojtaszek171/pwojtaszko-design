import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PortalModal } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/PortalModal',
  component: PortalModal,
} as ComponentMeta<typeof PortalModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortalModal> = (args) => <PortalModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: true
};

Default.argTypes = {
  show: {
    table: {
      type: {
        summary: 'boolean'
      }
    },
  }
}
