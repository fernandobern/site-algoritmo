
import type { ReactNode } from 'react';
import './container.css';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div  className="container">
    {children}
  </div>
}