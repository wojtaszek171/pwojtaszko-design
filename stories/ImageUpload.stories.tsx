import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUpload } from '../src';
import photoString from './assets/photo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageUpload> = (args) => (
  <div style={{
    width:150,
    height:150
  }}>
    <ImageUpload
      {...args}
      aspect={1/1}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
};

Default.argTypes = {
  aspect: {
    table: {
      disable: true,
    },
  },
  photo: {
    table: {
      type: {
        summary: 'React.ReactNode'
      }
    },
    control: {
      type: 'select',
      options: {
        'no photo': null,
        photoBase64: photoString
      }
    }
  }
}
