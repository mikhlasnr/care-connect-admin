import React from 'react';
import './AuthLayout.styles.scss';
import { AuthLayoutProps } from './AuthLayout.type';

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container">{children}</div>
    </div>
  );
};
export default AuthLayout;
