
import { ElementType } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loader: ElementType = () => (
 <div className="d-flex vh-100 justify-content-center align-items-center">
   <Spinner animation="border" role="status">
     <span className="visually-hidden">Loading...</span>
   </Spinner>
 </div>
);