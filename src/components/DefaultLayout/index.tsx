import { ReactNode } from 'react';
import Header from '../Header';
import './styles.css';

type Props = {
  children?: ReactNode;
}

function DefaultLayout({ children } : Props) {
  return (
    <>
      <Header />
      
      <div className="container">
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
