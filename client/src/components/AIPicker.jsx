import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = (props) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={props.prompt}
        onChange={(e) => props.setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {props.generatingImg ? (
          <CustomButton
            type="outline"
            title="asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => {
                console.log("Triggering request with prompt", prompt);
                props.handleSubmit("logo");
              }}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => props.handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
