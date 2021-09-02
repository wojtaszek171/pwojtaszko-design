import React, { FC, useState } from 'react';
import Cropper from 'react-easy-crop'
import { Modal } from '../Modal';
import { getCroppedImg } from './getCroppedImage';
import './ImageUpload.scss';

interface ImageUploadProps {
  aspect?: number;
  onChange?: Function;
  round?: boolean;
  edit?: boolean;
}

const ImageUpload: FC<ImageUploadProps> = ({ aspect = 1/1, round, onChange, edit }) => {
  const [image, setImage] = useState('');
  const [croppedImage, setCroppedImage] = useState('');
  const [cropperVisible, setCropperVisible] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixelsState, setCroppedAreaPixelsState] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  const handleOnChange = (e: any) => {    
    const file = e.target.files[0] || null;

    if(!file) {
      setImage('');
      return;
    }

    fileToDataUri(file)
      .then((dataUri: any) => {
        setImage(dataUri);
      });
  
    onChange && onChange();
  };

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixelsState(croppedAreaPixels);
  };

  const handleCrop = () => {
    getCroppedImg(image, croppedAreaPixelsState).then((res: any) => setCroppedImage(res));
    setCropperVisible(false);
  };
  
  return (
    <div className={`pwd-image-upload-component${round ? ' pwd-round' : ''}`}>
      {!!(image.length) &&
        <>
          <img src={croppedImage || image}/>
          <div className='image-buttons'>
            {edit && 
              <div
                className='input-button'
                onClick={() => setCropperVisible(true)}
              >
                <span>
                  ✎
                </span>
              </div>
            }
            <div
              className='input-button trash'
              onClick={() => {
                setImage('');
                setCroppedImage('');
              }}
            >
              <span>
                🗑
              </span>
            </div>
          </div>
        </>
      }
      {!image.length &&
        <>
          <input
            type='file'
            accept="image/*"
            onChange={handleOnChange}
          />
          <div className='image-buttons'>
            <div className='input-button'>
              <span>
                +
              </span>
            </div>
          </div>
        </>
      }
      {cropperVisible &&
        <Modal
          show={cropperVisible}
          onClose={() => setCropperVisible(false)}
          key={'cropper'}
        >
          <div className='cropper-modal'>
            <div className='cropper-wrapper'>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                cropShape={round ? 'round' : undefined}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className='cropper-buttons-wrapper'>
              <div className='cropper-button' onClick={() => setZoom(prev => prev + 0.25)}>+</div>
              <div className='cropper-button' onClick={handleCrop}>✓</div>
              <div className='cropper-button' onClick={() => setZoom(prev => (prev >= 1.25)? prev - 0.25: 1)}>-</div>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}

export default ImageUpload;
