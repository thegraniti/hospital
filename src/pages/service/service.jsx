import React from 'react'
import Services from '../../components/services/Services'
import { servicesData } from '../../constant/icons'
import './service.css'


function Service() {

    const showServicesData = servicesData.map(service => {
        return <Services id={service.id} key={service.id} {...service} />
    })

  return (
    <div className='section'>
        <div className='service-header flex header'>
            <h2>Services</h2>
            <h1>Excellent Medical<br/>Services</h1>
        </div>
        <div className='services-data'>
        {showServicesData}
        </div>
    </div>
    
  )
}

export default Service