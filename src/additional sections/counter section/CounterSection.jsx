import CountUp from 'react-countup';
const CounterSection = () => {
    return (
        <div className='bg-[#a5d7e81e] py-16'>
            <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-8 lg:gap-x-24'>
                <div className='text-center'>
                    <div className='font-bold text-3xl md:text-4xl mb-2'>
                        <CountUp end={15} suffix="+" />
                    </div>
                    <h2 className='text-xl font-semibold'>Years of Experience</h2>
                </div>
                <div className='text-center'>
                    <div className='font-bold text-3xl md:text-4xl mb-2'>
                        <CountUp end={800} suffix="+" />
                    </div>
                    <h2 className='text-xl font-semibold'>Successful Events</h2>
                </div>
                <div className='text-center'>
                    <div className='font-bold text-3xl md:text-4xl mb-2'>
                        <CountUp end={300} suffix="+" />
                    </div>
                    <h2 className='text-xl font-semibold'>Satisfied Clients</h2>
                </div>
                <div className='text-center'>
                    <div className='font-bold text-3xl md:text-4xl mb-2'>
                        <CountUp end={10} />
                    </div>
                    <h2 className='text-xl font-semibold'>Awards Won</h2>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;