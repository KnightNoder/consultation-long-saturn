import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
      Set_disp(false)
    }, 3000);
  }, []);

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="66.5" 
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Let's not tell your boss how many hours you worked yesterday.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>How about your work style?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","work_style","9-10 hours")} noImage="true" choice={saturn_long_choice.skin.work_style} value="9-10 hours" text="9-10 hours"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","work_style","10-11 hours")} noImage="true" choice={saturn_long_choice.skin.work_style} value="10-11 hours"  text="10-11 hours"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","work_style","11-12 hours")} noImage="true" choice={saturn_long_choice.skin.work_style} value="11-12 hours" text="11-12 hours"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","work_style","12 and above")} noImage="true" choice={saturn_long_choice.skin.work_style} value="12 and above" text="12 and above"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-14"} backLink="skin-12"/>
    </>
  )
}

export default SkinOne