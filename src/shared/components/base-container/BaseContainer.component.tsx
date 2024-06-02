import React from 'react';
import './BaseContainer.styles.scss';
import { BaseContainerProps } from './BaseContainer.type';

export const BaseContainer = ({ children }: BaseContainerProps) => {
  return <div className="base-container">{children}</div>;
};
