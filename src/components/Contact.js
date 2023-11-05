import React,{useState, useEffect} from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';
function Contact() {
    const location = useLocation();
  const [dynamicProp, setDynamicProp] = useState('default');

  useEffect(() => {
    if (location.pathname === '/contact') {
      setDynamicProp('');
    } 
  }, [location.pathname]);
    return (
        <>
            <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={dynamicProp} />
            
        </>
    )
}

export default Contact
