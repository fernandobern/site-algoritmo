import React from 'react';
import type { ReactNode } from 'react';
import './container.css';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <body  className="container">
    {children}
  </body>
}