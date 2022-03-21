import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Modal } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => { setModalVisible(true) }}
        text={'Show modal'}
      />
      <Modal
        {...args}
        onClose={() => { setModalVisible(false) }}
        show={modalVisible || args.show}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is modal rendered inside component.</span>
          <span>It inherits styles from component in which it is rendered.</span>
          <Button
            onClick={() => { setModalVisible(false) }}
            text='Close modal'
          />
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal (position fixed component)'
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
