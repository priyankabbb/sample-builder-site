import React, { useState } from 'react';
import { AboutUs, Footer, HeaderCard, InfoCard, NavBar, EnquiryForm } from '../../components';

function HomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log('here')
  const showModal = () => {
    console.log('showModal')
    setIsModalVisible(true);
    
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <NavBar />
      <HeaderCard showModal={showModal} />
      <AboutUs />
      <InfoCard />
      <Footer />
      <EnquiryForm 
        isModalVisible={isModalVisible} 
        showModal={showModal} 
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
}

export default HomePage;
