import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="49.5"
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
              <h5>Do you have blackheads/ whiteheads on your skin?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","blackheads_whiteheads","Chin")} noImage="true" choice={saturn_long_choice.skin.blackheads_whiteheads} value="Chin" text="Chin"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","blackheads_whiteheads","Cheeks")} noImage="true" choice={saturn_long_choice.skin.blackheads_whiteheads} value="Cheeks"  text="Cheeks"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","blackheads_whiteheads","Forehead")} noImage="true" choice={saturn_long_choice.skin.blackheads_whiteheads} value="Forehead" text="Forehead"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-4"} backLink="skin-2"/>
    </>
  )
}

export default SkinOne