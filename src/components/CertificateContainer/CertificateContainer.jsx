import React from 'react'
import { Element } from "react-scroll"
import './CertificateContainer.css'
import Certificate_img_1 from "../../assets/Certificatesimage/Certificate_1.jpeg" 
import Certificate_img_2 from "../../assets/Certificatesimage/Certificate_2.jpeg"
import Certificate_img_3 from "../../assets/Certificatesimage/Certificate_3.jpeg"
import Certificate_img_4 from "../../assets/Certificatesimage/Certificate_4.jpeg"
import Certificate_img_5 from "../../assets/Certificatesimage/Certificate_5.jpeg"
import Certificate_img_6 from "../../assets/Certificatesimage/Certificate_6.jpeg"


const CertificateContainer = () => {
  return (
    <Element className='certificateContainer' id='certificate'>
      <h1 className='heading'>My <span>Certificates</span></h1>
    <div className='certificateImg'>
    <div>
      <img src={Certificate_img_1} alt="certificateImg1" />
    </div>

    <div>
    <img src={Certificate_img_2} alt="certificateImg2" />
    </div>

    <div>
      <img src={Certificate_img_3} alt="certificateImg3" />
    </div>

    <div>
      <img src={Certificate_img_4} alt="certificateImg4" />
    </div>

    <div>
      <img src={Certificate_img_5} alt="certificateImg5" />
    </div>

    <div>
      <img src={Certificate_img_6} alt="certificateImg6" />
    </div>
    </div>
   </Element>
  )
}
export default CertificateContainer
