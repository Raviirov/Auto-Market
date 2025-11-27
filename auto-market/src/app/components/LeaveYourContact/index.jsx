import React, { useState } from 'react'
import './style.scss';
import BoxerGloves from '../../assets/images/boxerglove.png';
import Image from 'next/image';
import Button from '../Button';
import Heading from '../Heading';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function LeaveYourContact() {
  const [phone, setPhone] = useState('');
  const [showFlag, setShowFlag] = useState(false);
  const [country, setCountry] = useState(null);

  return (
    <div className='leave-your-contact'>
      <Image src={BoxerGloves} alt="Boxer Glove" className='boxer-gloves-image'/>
      <div className='text-content'>
        <Heading
          title='Перебьем предложения от конкурентов!'
          style={{ color: '#FFFFFF', fontSize: '30px', textTransform: 'uppercase' }}
        />
        <p className='description'>Скидки <span className='red-span'>от 10 до 25%</span> на стоимость автомобиля</p>
        <div onClick={() => setShowFlag(true)} style={{ display: 'flex', gap: '40px', margin: '25px 0 25px 0' }}>
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
              fontSize: '13px',
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
          <Button width={369} height={65}>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</Button>
        </div>
        <p style={{ fontSize: '13px', color: '#737373' }}>
          Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных
        </p>
      </div>
    </div>
  )
}