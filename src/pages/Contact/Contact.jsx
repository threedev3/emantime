import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SubBanner from '../../components/banner/SubBanner'
import ContactDetails from '../../components/contactDetails/ContactDetails'

function Contact() {
  return (
    <div>
      <SubBanner course="Contact" />
      <ContactForm />
      <ContactDetails />
    </div>
  )
}

export default Contact