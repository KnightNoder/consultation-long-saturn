import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step  } from "react-step-progress-bar";

const ProgressBarComp = ({progress_step,img_1,img_2,img_3,img_4,text}) => {
  return (
    <>
    <div className='progress-container'>

    <div className='progress-bar-container'>
    <ProgressBar
        percent={progress_step}
        filledBackground="#975169"
        >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            className='progress-bar-image'
            // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-1.png?v=1655109040"
            src={img_1}
            />
            )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            className='progress-bar-image'
            // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-2.png?v=1655109040"
            src={img_2}
            />
            )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
            className='progress-bar-image'
            // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-3.png?v=1655109040"
            src={img_3}
            />
            )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              className='progress-bar-image'
              // src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/skin-4.png?v=1655109040"
              src={img_4}
              />
          )}
        </Step>
      </ProgressBar>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"3%",width:"65%", marginLeft:"17%"}}>
            <div>Basic Details</div>
            <div>{text}</div>
            <div>Life Style</div>
            <div>Health</div>
        </div>
        </div>
      </>
  )
}

export default ProgressBarComp