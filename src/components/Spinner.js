import { Rings } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Rings 
        color='#0d8f2d'
        height="70"
        width="200"
        ariaLabel='loading'
        className='m-5'/>
        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner;