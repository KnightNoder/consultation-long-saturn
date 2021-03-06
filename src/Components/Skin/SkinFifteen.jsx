import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import {useState,useEffect } from 'react';
import ImageCard from '../ImageCard';
import ProgressBarComp from '../../Components/ProgressBarComp';


const SkinOne = ({saturn_long_choice,Set_minor_data}) => {
  const [disp,Set_disp] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
    // setTimeout(() => {
    //   Set_disp(false)
    // }, 3000);
  }, []);

  return (
    <>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="100"
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
          text="My Skin"/>
        </div>
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Answer a few questions so we can help
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>How often do you smoke or drink? </h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","smoke_drink","Daily")} noImage="true" choice={saturn_long_choice.skin.smoke_drink} value="Daily" text="Daily"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","smoke_drink","Occasionally")} noImage="true" choice={saturn_long_choice.skin.smoke_drink} value="Occasionally"  text="Occasionally"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","smoke_drink","Never")} noImage="true" choice={saturn_long_choice.skin.smoke_drink} value="Never" text="Never"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-15"} backLink="skin-13"/>
    </>
  )
}

export default SkinOne