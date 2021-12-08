import { ElementType } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const Error: ElementType = ({message}) => {
 const navigate = useNavigate();

 return (
  <div className="d-flex vh-100 justify-content-center align-items-center color">
     <Alert variant="danger">
       <p className="text-dark">
         {message}
       </p>
       <hr />
       <p className="d-flex justify-content-end bg-red">
         <Button onClick={() => navigate(-1)} variant="danger">
           Back
         </Button>
       </p>
     </Alert>
   </div>
 );
};