/* eslint-disable consistent-return */
import React, { useRef, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getIcon } from '../../utils/getIcon';
import * as S from './styles';

function Modal({
  children,
  isOpen,
  setIsOpen,
  id,
}) {
  const containerRef = useRef(null);
  const keydownHandler = useCallback(({ key }) => {
    switch (key) {
      case 'Escape':
        setIsOpen((prev) => !prev);
        break;
      default:
    }
  }, [setIsOpen]);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', keydownHandler);

      return () => document.removeEventListener('keydown', keydownHandler);
    }
  }, [isOpen, keydownHandler]);

  const closeModal = (e) => {
    if (containerRef.current === e.target) {
      setIsOpen((prev) => !prev);
    }
  };
  return ReactDOM.createPortal(
    <S.Container
      isOpen={isOpen}
      onClick={closeModal}
      ref={containerRef}
      id={id}
    >
      <S.Content>
        {children}
      </S.Content>
      <S.Close
        type="button"
        onClick={handleClose}
      >
        {getIcon({ icon: 'close' })}
      </S.Close>
    </S.Container>,
    document.getElementById('modal-root'),
  );
}

export default Modal;
