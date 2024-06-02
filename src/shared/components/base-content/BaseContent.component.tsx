'use client'
import { Layout } from 'antd';
import React from 'react';
import './BaseContent.styles.scss';
import { BaseContentProps } from './BaseContent.type';

const { Content } = Layout;

export const BaseContent = ({ children }: BaseContentProps) => {
  return <Content className="base-content">{children}</Content>;
};
