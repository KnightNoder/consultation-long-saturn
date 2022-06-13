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
        <div className='progress-bar'>
          <ProgressBarComp progress_step="44.5"/>
        </div>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>What is the frequency of your acne?</h5>
              <div className='scroll-div'>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","acne","Once in a week")} noImage="true" choice={saturn_long_choice.skin.acne} value="Once in a week" text="Once in a week"/>
                <ChoiceCard show={disp}
                  clickHandler={() => Set_minor_data("skin","acne","Once in a month or 2 months")} noImage="true" choice={saturn_long_choice.skin.acne} value="Once in a month or 2 months"  text="Once in a month or 2 months"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","Always have acne")} noImage="true" choice={saturn_long_choice.skin.acne} value="Always have acne" text="Acne"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","Very rarely")} noImage="true" choice={saturn_long_choice.skin.acne} value="Very rarely" text="Very rarely"/>
                <ChoiceCard show={disp}
                clickHandler={() => Set_minor_data("skin","acne","No acne")} noImage="true" choice={saturn_long_choice.skin.acne} value="No acne" text="No acne"/>
              </div>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-3"} backLink="skin-1"/>
    </>
  )
}

export default SkinOne

