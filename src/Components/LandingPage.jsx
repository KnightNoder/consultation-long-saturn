import React from 'react'
import Header from './Header'
import SelfAssessmentSection from './SelfAssessmentSection'
import { useEffect } from 'react'

const LandingPage = ({Set_data,Set_long_short}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <Header/>
        <SelfAssessmentSection Set_data={Set_data} Set_long_short={Set_long_short}/>
    </>
  )
}

export default LandingPage