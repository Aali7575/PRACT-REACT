import React from 'react'

function ContactButton() {
    const handleClick = () => {
        window.location.href = '/contact'
      }
  return (
    <button 
      className="inline-flex mt-8 text-lg font-medium text-gray-900 transition-all duration-200 transform font-pj hover:-translate-y-1 hover:text-gray-600 sm:mt-0"
      onClick={handleClick}>Contact</button>
  )
}

export default ContactButton