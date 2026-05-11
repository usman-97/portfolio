import React from "react";
import CustomButton from "../CustomButton";

const GitView = () => {
  return (
    <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
      <div className="flex items-start shrink-0 space-x-10 pl-5 pt-1 bg-midnight border-b border-steel font-sans">
        <p className="text-silver/50 uppercase">Portfolio [ Main ]</p>
      </div>
      <div className="flex space-x-20 ml-10 mt-10">
        <div className="flex flex-col space-y-2">
          <h3 className="text-silver/50 uppercase">Staged files</h3>
          <div className="flex items-start w-lg h-32 bg-midnight">
            <span className="w-full py-1 pl-2 font-mono text-xs bg-silver/10 text-silver cursor-pointer">
              contact_usman.md
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 w-full max-w-2xl">
          <div className="flex items-center">
            <label className="text-silver/50 w-24 shrink-0 text-xs">
              Author
            </label>
            <input
              id="contactEmail"
              type="text"
              className="flex-1 p-1 bg-midnight text-silver text-sm border-b border-b-emerald outline-none focus:bg-white/5 focus:border-b-emerald-400"
            />
          </div>
          <div className="flex items-end">
            <label className="text-silver/50 w-24 shrink-0 text-xs">
              Email
            </label>
            <input
              id="contactEmail"
              type="text"
              className="flex-1 p-1 bg-midnight text-silver text-sm border-b border-b-emerald outline-none focus:bg-white/5 focus:border-b-emerald-400"
            />
          </div>
          <div className="flex items-start">
            <label className="pt-0.5 text-silver/50 w-24 shrink-0 text-xs">
              Commit Message
            </label>
            <textarea className="flex-1 p-1 h-32 bg-midnight text-silver border-b text-sm leading-none border-b-emerald outline-none resize-none focus:bg-white/5 focus:border-b-emerald-400"></textarea>
          </div>
          <div className="self-end">
            <CustomButton
              backgroundColour="bg-forest"
              colour="text-obsidian"
              label="Commit"
              border="border border-forest"
              customStyles="uppercase"
              customLabelStyles="text-xs !font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitView;
