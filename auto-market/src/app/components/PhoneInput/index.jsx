import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './style.scss';

export default function MyPhoneInput() {
  const [phone, setPhone] = useState('');
  const [showFlag, setShowFlag] = useState(false);
  const [country, setCountry] = useState(null);

  return (
    <div className='phone-input-box' onClick={() => setShowFlag(true)}>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        placeholder='Ваш телефон'
        country={country}
        onFocus={() => { if (!country) setCountry('ru')}}
        inputStyle={{
          width: '369px',
          height: '65px',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: '#FFFFFF',
          paddingLeft: showFlag ? '50px' : '20px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center'
        }}
        buttonStyle={{
          display: showFlag ? 'inline-block' : 'none',
          border: 'none',
          borderRadius: '6px 0 0 6px',
          backgroundColor: '#ffffffff',
          width: '50px',
          padding: '0 20px 0 10px'
        }}
        containerStyle={{
          width: '369px',
        }}
        dropdownStyle={{
          width: '351px',
          color: '#000',
          fontSize: '14px',
          backgroundColor: '#fff',
        }}
      />
    </div>
  )
}