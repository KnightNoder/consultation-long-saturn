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
        <div className={`${disp ? "show-overlay-screen" : "hide-overlay-screen"}`}>
          Answer a few questions so we can help
        </div>
        <div className='progress-bar-saturn-step'>
          <ProgressBarComp progress_step="34" 
          img_1="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
          img_2="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
          img_3="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
          img_4="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>What are you concerned about?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_concern","Open pores")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Open pores" text="Open pores"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","skin_concern","Pigmentation")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Pigmentation"  text="Pigmentation"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","skin_concern","Active Acne")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Active Acne" text="Acne"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","skin_concern","Aging")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Aging" text="Aging"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","skin_concern","Dark circles")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Dark circles" text="Dark circles"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","skin_concern","Acne marks & spots")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Acne marks & spots"  text="Spots & marks"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","skin_concern","Dull Skin")} noImage="true" choice={saturn_long_choice.skin.skin_concern} value="Dull Skin" text="Dull skin (general skincare)"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-1"} backLink="user-details"/>
    </>
  )
}

export default SkinOne