import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const WeightLossOne = ({saturn_long_choice,Set_minor_data,saturn_choice,Set_minor_short_data,assessment_type}) => {
  const [vibrate_height,Set_vibrate_height] = useState(false);
  const [vibrate_weight,Set_vibrate_weight] = useState(false);
  const [disp,Set_disp] = useState(true);

  const vibrateText = () => {
    navigator.vibrate(1000);
    Set_vibrate_height(true);
    Set_vibrate_weight(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    Set_minor_data("user_info","height","");
    Set_minor_data("user_info","weight","");
    Set_minor_short_data("user_info","height","");
    Set_minor_short_data("user_info","weight","");
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  const heightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_data("user_info","height",onlyDigits)
    Set_vibrate_height(false);
  }

  const weightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_data("user_info","weight",onlyDigits)
    Set_vibrate_weight(false);
  }

  const heightCheck_short = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_short_data("user_info","height",onlyDigits)
    Set_vibrate_height(false);
  }

  const weightCheck_short = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    Set_minor_short_data("user_info","weight",onlyDigits)
    Set_vibrate_weight(false);
  }

  return (
    <>
        <div className={`${assessment_type == "6 mins" ? "progress-bar-saturn-step" : "hide-overlay-screen"}`}>
          <ProgressBarComp progress_step="16" 
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/w-4.png?v=1655109040"
          text="My weight management"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Answer a few questions so we can help
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5 style={{marginBottom:"3%"}}>Please enter your height and weight below?</h5>
              <input inputMode="numeric" className='input' type="text" onChange={ assessment_type == "30 sec" ? heightCheck_short : heightCheck   } value={ assessment_type == "30 sec" ? saturn_choice.user_info.height :  saturn_long_choice.user_info.height} 
              placeholder='Height(in cms)' />
              <span style={ ( (assessment_type == "30 sec" ? !saturn_choice.user_info.height && vibrate_height : !saturn_long_choice.user_info.height && vibrate_height)) ? 
              {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                  Invalid input
              </span>
              <div  style={{visibility:"hidden", fontSize:"3px"}} > Dummy</div>
              <input inputMode="numeric" className='input' type="text" onChange={assessment_type == "30 sec" ? weightCheck_short : weightCheck} 
              value={assessment_type == "30 sec" ? saturn_choice.user_info.weight : saturn_long_choice.user_info.weight} 
              placeholder='Weight(in Kgs)' />
              <span style={ ((assessment_type == "60sec" ? !saturn_choice.user_info.weight && vibrate_weight : !saturn_long_choice.user_info.weight && vibrate_weight)) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                Invalid input
              </span>
            </div>
        </div>
        <ProceedTemplate text="Proceed" vibrateText={vibrateText} choice={"weight-management-1"} backLink="user-details" 
        conditionMet={assessment_type == "30 sec" ? saturn_choice.user_info.height && saturn_choice.user_info.weight : 
        saturn_long_choice.user_info.height && saturn_long_choice.user_info.weight}/>
    </>
  )
}

export default WeightLossOne