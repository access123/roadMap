import React, {useEffect,useState} from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [dynamicProp, setDynamicProp] = useState('default');

  useEffect(() => {
    if (location.pathname === '/') {
      setDynamicProp('');
    } 
  }, [location.pathname]);
  return (
    <>
    <div>
    <Nav titleLink={'Roadmap'} li1={dynamicProp} li2={'ABOUT'} li3={'CONTACT'} />
    <div className="container-flex">
      
    </div>
    </div>
    </>
  )
}
export default Home
