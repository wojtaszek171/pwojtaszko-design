import React, { FC, MouseEvent, useEffect, useState } from 'react';
import Cropper from 'react-easy-crop'
import { Modal } from '../Modal';
import { getCroppedImg } from './getCroppedImage';
import './ImageUpload.scss';

interface ImageUploadProps {
  photo?: string;
  aspect?: number;
  onChange?: (uri: Blob) => void;
  round?: boolean;
  edit?: boolean;
}

enum DragStates {
  none='none',
  drag='drag',
  enter='enter'
}

const ImageUpload: FC<ImageUploadProps> = ({ photo, aspect = 1/1, round, onChange, edit }) => {
  const [image, setImage] = useState(photo);
  const [croppedImage, setCroppedImage] = useState('');
  const [cropperVisible, setCropperVisible] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixelsState, setCroppedAreaPixelsState] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [dragState, setDragState] = useState(DragStates.none);

  useEffect(() => {
    setImage(photo);
  }, [photo]);

  const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  const handleOnChange = (e: any) => {    
    const file = e.target.files[0] || null;

    handleFile(file);
  };

  const handleFile = (file: any) => {
    if(!file) {      
      setImage(photo || '');
      return;
    }

    fileToDataUri(file)
      .then((dataUri: any) => {
        setImage(dataUri);

        onChange && onChange(dataUri);
      });
  }

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixelsState(croppedAreaPixels);
  };

  const handleCrop = () => {
    getCroppedImg(image, croppedAreaPixelsState).then((res: any) => setCroppedImage(res));
    setCropperVisible(false);
  };

  const dragOver = (e: MouseEvent) => {
    setDragState(DragStates.enter);
    e.preventDefault();
  }

  const dragEnter = (e: MouseEvent) => {
    e.preventDefault();
  }

  const dragLeave = (e: MouseEvent) => {
    setDragState(DragStates.none);
    e.preventDefault();
  }

  const fileDrop = (e: any) => {
    e.preventDefault();
    setDragState(DragStates.none);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFile(files[0]);
    }

  }

  return (
    <div
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
      className={`pwd-image-upload-component ${round ? ' pwd-round' : ''}`}
    >
      {!!(image?.length) &&
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
      {!image?.length &&
        <>
          <input
            type='file'
            accept="image/*"
            onChange={handleOnChange}
          />
          <div className='image-buttons'>
            <div className='input-button'>
              {dragState === DragStates.none && 
                <span>
                  +
                </span>}
              {dragState === DragStates.enter &&
                <span className='bounce'>
                  v
                </span>}
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
