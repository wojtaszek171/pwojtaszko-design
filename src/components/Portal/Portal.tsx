import { FC } from 'react';
import { createPortal } from 'react-dom';

interface ReactPortalProps {
  wrapperId?: string;
};

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const ReactPortal: FC<ReactPortalProps> = ({ children, wrapperId = "react-portal-wrapper" }) => {
  let element = document.getElementById(wrapperId);

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, element);
}

export default ReactPortal;
