import React, { FC } from 'react';

interface ContainerWithModalProps {
  wrapperId?: string;
};

const ContainerWithModal: FC<ContainerWithModalProps> = ({ children }) => {

  return (
      <div> 
        {children}
      </div>
  )
}

export default ContainerWithModal;
