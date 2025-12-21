import React, { useState } from 'react'
import './style.scss';
import BoxerGloves from '../../assets/images/boxerglove.png';
import Image from 'next/image';
import Button from '../Button';
import Heading from '../Heading';
import MyPhoneInput from '../PhoneInput';

export default function LeaveYourContact() {
  return (
    <div className='leave-your-contact'>
      <Image src={BoxerGloves} alt="Boxer Glove" className='boxer-gloves-image'/>
      <div className='text-content'>
        <Heading
          title='Перебьем предложения от конкурентов!'
          style={{ color: '#FFFFFF', fontSize: '30px', textTransform: 'uppercase' }}
        />
        <p className='description'>Скидки <span className='red-span'>от 10 до 25%</span> на стоимость автомобиля</p>
        <div style={{ display: 'flex', gap: '40px', margin: '25px 0 25px 0' }}>
          <MyPhoneInput />
          <Button width={369} height={65}>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</Button>
        </div>
        <p style={{ fontSize: '13px', color: '#737373' }}>
          Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных
        </p>
      </div>
    </div>
  )
}