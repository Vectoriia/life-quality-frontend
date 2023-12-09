import {
  Modal,
  Button,
  ModalProps,
  Breakpoint,
} from '@mui/material';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { IoCloseOutline as X } from "react-icons/io5";

interface Props extends Omit<ModalProps, 'open' | 'children'> {
  children?: ReactNode;
  closeButtonClassName?: string;
  footer?: ReactNode;
  footerClassName?: string;
  forceScrollHide?: boolean;
  hasCloseButton?: boolean;
  hasMobileIndicator?: boolean;
  header?: ReactNode;
  headerClassName?: string;
  height?: string | number;
  isFullHeightOnMobile?: boolean;
  isVisible: boolean;
  mainClassName?: string;
  mainId?: string;
  mainRef?: React.Ref<HTMLDivElement>;
  maxHeight?: string | number;
  mobileBreakpoint?: number | Breakpoint;
  modalClassName?: string;
  width?: string | number;
}

const Popup: React.FC<Props> = ({
  isVisible,
  onClose,
  children,
  className,
  closeButtonClassName,
  header,
  headerClassName,
  footer,
  footerClassName,
  hasCloseButton,
  hasMobileIndicator,
  height,
  isFullHeightOnMobile,
  mainClassName,
  mainId,
  mainRef,
  maxHeight = '96%',
  mobileBreakpoint = 'xs',
  modalClassName,
  width = 465,
  forceScrollHide = false,
  ...rest
}) => {
  return (
    <Modal
      open={isVisible}
      onClose={onClose}
      className={clsx(
        className,
      )}
      {...rest}
    >
      <div
        className={clsx(
          'relative flex flex-col bg-contrast outline-0 overflow-hidden outline-none',
          {
            'h-screen': isFullHeightOnMobile,
          },
          modalClassName,
        )}
        style={{
          maxHeight:
            !isFullHeightOnMobile ? maxHeight : undefined,
          width:  width,
          height: !isFullHeightOnMobile ? height : '100%',
        }}
      >
        {hasMobileIndicator && (
          // eslint-disable-next-line max-len
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-[58px] bg-primary-line rounded-[5px]" />
        )}
        {hasCloseButton && (
          <Button
            className={clsx(
              'absolute top-5 right-5 min-w-0 min-h-0 h-fit !px-0',
              closeButtonClassName,
            )}
            onClick={(event) => onClose?.(event, 'escapeKeyDown')}
          >
            <X size={20} color="#000000" />
          </Button>
        )}
        {header && (
          <div className={clsx('pt-9', headerClassName)}>
            {header}
          </div>
        )}
        <div
          className={clsx(
            'overflow-y-auto flex-1 custom-scrollbar',
            !header && 'pt-9',
            !footer && 'pb-9',
            forceScrollHide && 'scrollbar-hide',
            mainClassName,
          )}
          id={mainId}
          ref={mainRef}
        >
          {children}
        </div>
        {footer && (
          <div className={clsx('pb-9', footerClassName)}>
            {footer}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Popup;
