
import React, { FC } from 'react';
import { Input, Modal, Toggle, Login, Header, Button, ImageUpload, Checkbox, Select, PortalModal } from '../../src';
import { useState } from 'react';
import photoJPG from './profile.jpg';
import { useEffect } from 'react';
import { ContainerWithModal } from './ContainerWithModal';
import './App.css';

const App: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  useEffect(() => {
    if (photoJPG) {
      var oReq = new XMLHttpRequest();    
      oReq.open('get', photoJPG , true);
      oReq.responseType = 'blob';
      oReq.onload = function () {
        fileToDataUri(oReq.response).then((dataUri: any) => {
          setPhoto(dataUri);
        });
      };
      oReq.send();
    }
  }, []);

  return (
    <div className="App">
      <Header
        dropdownTitle='test'
        dropdownElements={[{
          item: <span>test</span>,
          key: 'test',
          onClick: () => {console.log('test')}
        }]}
      />
      <ContainerWithModal>
        <>
          <Button
            onClick={() => { setModalVisible(true) }}
            text={'Show modal'}
          />
          <Modal
            show={modalVisible}
            title='Modal (position fixed component)'
            onClose={() => { setModalVisible(false) }}
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
      </ContainerWithModal>
      <ContainerWithModal>
        <>
          <Button
            onClick={() => { setModal2Visible(true) }}
            text={'Show portal modal'}
          />
          <PortalModal
            show={modal2Visible}
            title='Portal modal'
            onClose={() => { setModal2Visible(false) }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>This is modal rendered inside #root.</span>
              <span>It inherits styles from div #root.</span>
              <span>Using portal you can render component anywhere in other component.</span>
              <Button
                onClick={() => { setModal2Visible(false) }}
                text='Close modal'
              />
            </div>
          </PortalModal>
        </>
      </ContainerWithModal>
      <Toggle />
      <div style={{ width: '150px' }}>
        <Input autocomplete={'off'} label='test'/>
      </div>
      <div style={{ width: '100px', height: '100px' }}>
        <ImageUpload
          photo={photo}
          edit
          round
          onChange={(uri) => console.log(uri)}
        />
      </div>
      <div style={{ margin: '10px', display: 'flex', flexDirection: 'row' }}>
        <Checkbox
          checkShape={true}
          checked={checkbox1}
          onChange={setCheckbox1}
        />
        <Checkbox
          checked={checkbox2}
          onChange={setCheckbox2}
        />
      </div>
      <div style={{ width: '150px' }}>
        <Select
          maxHeight={100}
          options={[
            {
              item: 'test',
              key: 'option1'
            },
            {
              item: 'test2',
              key: 'option2'
            },
            {
              item: <span>test3</span>,
              key: 'option3'
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
