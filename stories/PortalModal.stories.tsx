import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, PortalModal } from '../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pwojtaszko-design/PortalModal',
  component: PortalModal,
} as ComponentMeta<typeof PortalModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortalModal> = (args) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => { setModalVisible(true) }}
        text={'Show portal modal'}
      />
      <PortalModal
        {...args}
        onClose={() => { setModalVisible(false) }}
        show={modalVisible || args.show}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>This is modal rendered inside #root.</span>
          <span>It inherits styles from div #root.</span>
          <span>Using portal you can render component anywhere in other component.</span>
          <Button
            onClick={() => { setModalVisible(false) }}
            text='Close modal'
          />
        </div>
      </PortalModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Portal modal'
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
