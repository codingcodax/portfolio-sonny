import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = ({ name, subject, message }) => {
    window.location.href = `mailto:codingcodax@gmail.com?subject${subject}&body=Hi, my name is ${name}. ${message}`;
  };

  return (
    <form className='grid grid-cols-2 gap-2' onSubmit={handleSubmit(onSubmit)}>
      <input
        required
        className='contact-input'
        placeholder='Name'
        type='text'
        {...register('name')}
      />
      <input
        required
        className='contact-input'
        placeholder='Email'
        type='email'
        {...register('email')}
      />
      <input
        required
        className='contact-input col-span-2'
        placeholder='Subject'
        type='text'
        {...register('subject')}
      />
      <textarea
        required
        className='contact-input col-span-2 max-h-36 h-20 min-h-16 resize-y'
        id='message'
        placeholder='Message'
        {...register('message')}
      />

      <button
        className='py-5 px-10 col-span-2 text-black text-lg font-bold bg-[#f7ab0a] rounded-md'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
