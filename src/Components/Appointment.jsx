import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import ImageCard from './ImageCard';
import {useEffect } from 'react';

const Appointment = ({saturn_long_choice,Set_data}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Wasn’t that easy? Would you like a free consultation?</h5>
              <p style={{fontSize:"18px", marginTop:"3%"}}>How would you like us to respond?</p>
              <ChoiceCard    
                clickHandler={() => Set_data("appointment_type","FREE Consultation call")} noImage="true"
                 choice={saturn_long_choice.appointment_type} value="FREE Consultation call" text="FREE Consultation call"/>
              <ChoiceCard    
                clickHandler={() => Set_data("appointment_type","Curate my treatment plan")} noImage="true" 
                choice={saturn_long_choice.appointment_type}  value="Curate my treatment plan" text="Curate my treatment plan"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"callback"} directNavigate="true"
         navigateTo="-1" conditionMet="true"/>
    </>
  )
}

export default Appointment