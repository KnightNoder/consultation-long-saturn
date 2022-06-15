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
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          A balanced diet and plenty of rest are essential for keeping your skin looking its best.
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>May I know your sleeping pattern?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","sleeping_pattern","3-5 hours")} noImage="true" choice={saturn_long_choice.skin.sleeping_pattern} value="3-5 hours" text="3-5 hours"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","sleeping_pattern","5-6 hours")} noImage="true" choice={saturn_long_choice.skin.sleeping_pattern} value="5-6 hours"  text="5-6 hours"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","sleeping_pattern","6-8 hours")} noImage="true" choice={saturn_long_choice.skin.sleeping_pattern} value="6-8 hours" text="6-8 hours"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","sleeping_pattern","8-10 hours")} noImage="true" choice={saturn_long_choice.skin.sleeping_pattern} value="8-10 hours" text="8-10 hours"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-13"} backLink="skin-11"/>
    </>
  )
}

export default SkinOne