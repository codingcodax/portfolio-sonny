const Circles = () => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='mt-52 absolute h-[200px] w-[200px] border border-[#333] rounded-full animate-ping' />
      <div className='mt-52 absolute h-[300px] w-[300px] border border-[#333] rounded-full' />
      <div className='mt-52 absolute h-[500px] w-[500px] border border-[#333] rounded-full' />
      <div className='mt-52 absolute h-[650px] w-[650px] border border-[#f7ab0a] rounded-full animate-pulse' />
      <div className='mt-52 absolute h-[800px] w-[800px] border border-[#333] rounded-full' />
    </div>
  );
};

export default Circles;
