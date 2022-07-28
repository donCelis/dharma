import { useRef } from 'react';

export default function ContactUs() {
  const defaultEmail = 'info@mydharma.app';
  const subject = 'Dharma Support';

  const nameRef = useRef();
  const emailRef = useRef();
  const smsRef = useRef();

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      sms: smsRef.current.value.trim(),
    };

    const message = ({ name, email, sms }) => `Hi Dharma Team, ${name}, ${sms}, ${email}`;

    window.location.href = `mailto:${defaultEmail}?subject=${subject}&body=${message(data)}`;

    e.target.reset();
  };
  return (
    <form className='contact_us' onSubmit={handleSumbit}>
      <section className='form_body'>
        <h3>Contact Us</h3>
        <div className='form_group'>
          <label htmlFor=''>Name</label>
          <input ref={nameRef} type='text' placeholder='Write your name' required />
        </div>
        <div className='form_group'>
          <label htmlFor=''>Email</label>
          <input ref={emailRef} type='email' placeholder='Write your email' required />
        </div>
        <div className='form_group'>
          <label htmlFor=''>Message</label>
          <textarea ref={smsRef} placeholder='Write your message' required />
        </div>
      </section>
      <button className='contact_us_btn'>Send</button>
    </form>
  );
}
