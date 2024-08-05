import Slider from '@/components/profile/profile/components/Slider'
import OneColumn from '@/components/profile/profile/components/textSections/OneColumn'
import TwoColumns from '@/components/profile/profile/components/textSections/TwoColumns'
import Image from 'next/image'
import React from 'react'



const t2 = () => {
  const photo1 = <Image src={'/images/test.jpg'} alt='d' width={200} height={100} />
  return (
    <div><TwoColumns rightColumnText={`asdkasmok aso od
    
    oa od os aoiasoidmisak ii j uj j ujuijuio`} leftColumnText='sadaijs9iaj j9j 9j 9j 9j9ujuhy7tg6fr56tg7yhu8ji yhy8hh7yh7'/></div>
  )
}

export default t2