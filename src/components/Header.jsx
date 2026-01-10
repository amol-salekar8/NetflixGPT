import React from 'react'
import  NetflixLogo from '../utils/NetflixLogo'

const Header = () => {
  const netflixLogo = {
      width: '9.25rem',
      height: '2.5rem',
      color: 'rgb(229, 9, 20)',
      fill: 'rgb(229, 9, 20)',
      display: 'block'
  }

  return (
    <div className='absolute px-8 py-3 bg-gradient-to-b from-black z-10'>
        {/* <NetflixLogo netflixLogo = {netflixLogo} width={100} height={100}/> */}
        <img className='w-40 ' src ='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
    </div>
  )
}

export default Header