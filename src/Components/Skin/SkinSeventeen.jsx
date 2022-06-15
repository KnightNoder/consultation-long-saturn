import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/WeightLossFour.css';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard'
import ProgressBarComp from '../../Components/ProgressBarComp';


const WeightLossFour = ({saturn_long_choice,Set_problems_data}) => {
  const [disp,Set_disp] = useState(true);
  
  const changeHandler = (name,value) =>{
    Set_problems_data(name,value)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, [])

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="66.5"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>  
              <h5>Do you have any pre-existing problems? </h5>
              <div className={` error-text-checkbox ${!!Object.values(saturn_long_choice.skin.health_issues).filter((x)=> x).length ? "not-visible": "visible"}`}>Please answer the question to proceed</div>
              <div className='scroll-div'>
                <CheckBoxCard name="Hypertension" value={saturn_long_choice.skin.health_issues.Hypertension} onChange={(name,value)=>changeHandler(name,value)}  text="Hypertension"/>
                <CheckBoxCard name="Thyroid" value={saturn_long_choice.skin.health_issues.Thyroid} onChange={(name,value)=>changeHandler(name,value)} text="Thyroid"/>
                <CheckBoxCard name="Heart" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.skin.health_issues.Heart} text="Heart"/>
                <CheckBoxCard name="Diabetes" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.skin.health_issues.Diabetes} text="Diabetes"/>
                <CheckBoxCard name="Kidney" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.skin.health_issues.Kidney} text="Kidney"/>
                <CheckBoxCard name="Indigestion" onChange={(name,value)=>changeHandler(name,value)} value={saturn_long_choice.skin.health_issues.Indigestion} text="Indigestion"/>
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"skin-17"} vibrateText={()=>{}} backLink="skin-15" conditionMet={!!Object.values(saturn_long_choice.skin.health_issues).filter((x)=> x).length}/>
    </>
  )
}

export default WeightLossFour