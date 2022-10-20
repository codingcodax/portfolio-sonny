const Form = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <input className='contact-input' placeholder='Name' type='text' />
      <input className='contact-input' placeholder='Email' type='email' />
      <input
        className='contact-input col-span-2'
        placeholder='Subject'
        type='text'
      />
      <textarea
        className='contact-input col-span-2 max-h-36 h-20 min-h-16 resize-y'
        id='message'
        name='message'
        placeholder='Message'
      />

      <button
        className='py-5 px-10 col-span-2 text-black text-lg font-bold bg-[#f7ab0a] rounded-md'
        type='submit'
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
