import React from 'react'

const WhatsAppButton = () => {

    const phoneNumber = '8655102214';
    const message = '';

    const handleClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
    }

  return (
    <div className='whatsApp'>
        <button onClick={handleClick}>
            <img src="whatsapp-logo-1.png" alt="whatsApp-icon" />
        </button>
    </div>
  )
}

export default WhatsAppButton
