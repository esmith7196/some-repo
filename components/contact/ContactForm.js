import React from 'react';
import Button from '../ui/common/Button';

const ContactForm = () => {
  const inputClassList =
    'bg-transparent border-b-2 border-dark mb-6 w-full text-white border-white';
  const labelClassList = 'mb-4 text-white';
  return (
    <form
      className="md:px-4 w-full "
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <p className={labelClassList}>
          <label htmlFor="name">Your Name</label>
        </p>
        <input className={inputClassList} type="text" id="name" name="name" />
      </div>

      <div>
        <p className={labelClassList}>
          <label htmlFor="email">Your Email</label>
        </p>
        <input
          className={inputClassList}
          type="email"
          id="email"
          name="email"
        />
      </div>

      <div>
        <p className={labelClassList}>
          <label htmlFor="message">Your Message</label>
        </p>
        <textarea
          className={inputClassList}
          type="email"
          id="message"
          name="message"
        />
      </div>
      <div>
        <Button fill>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;
