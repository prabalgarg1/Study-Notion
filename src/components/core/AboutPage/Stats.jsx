import React from 'react'
import CountUp from 'react-countup'
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaAward } from 'react-icons/fa'

const Stats = [
  { count: 5000, label: "Active Students", icon: <FaUserGraduate />, suffix: "+" },
  { count: 10, label: "Mentors", icon: <FaChalkboardTeacher />, suffix: "+" },
  { count: 200, label: "Courses", icon: <FaBookOpen />, suffix: "+" },
  { count: 50, label: "Awards", icon: <FaAward />, suffix: "+" },
]

const StatsComponent = () => {
  return (
    <div className='bg-richblack-700'>
      <div className='flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 text-center'>
          {Stats.map((data, index) => (
            <div key={index} className='flex flex-col py-10 items-center gap-2' title={data.label}>
              <div className='text-yellow-50 text-4xl'>{data.icon}</div>
              <h1 className='text-[30px] font-bold text-richblack-5'>
                <CountUp end={data.count} duration={2} />{data.suffix}
              </h1>
              <h2 className='font-semibold text-[16px] text-richblack-500'>
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsComponent



{/*import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    
        <div className='bg-richblack-700'>
            <div className='flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto '>
                  <div className='grid grid-cols-2 md:grid-cols-4 text-center'>
                       { Stats.map( (data, index) => {
                                return (
                                    
                                    <div key={index} className='flex flex-col py-10'>
                                    <h1 className='text-[30px] font-bold text-richblack-5'>
                                            {data.count}
                                        </h1>
                                        <h2 className='font-semibold text-[16px] text-richblack-500'>
                                            {data.label}
                                        </h2>
                                    </div>
                                    
                                )
                            } )}
                    </div>
                
            </div>
        </div>
    
  )
}

export default StatsComponent
*/}