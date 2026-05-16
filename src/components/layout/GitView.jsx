import React, { useState } from "react";
import CustomButton from "../CustomButton";
import ContactForm from "../contactForm/ContactForm";
import GitStagedView from "./GitView/GitStagedView";
import GitViewHeader from "./GitView/GitViewHeader";

const GitView = () => {
  return (
    <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
      <GitViewHeader />
      <div className="flex flex-col space-y-8 mx-5 mt-10 pb-5 lg:mx-10 2xl:flex-row 2xl:space-x-20 2xl:mx-0 2xl:ml-10 2xl:pb-0">
        <GitStagedView />
        <ContactForm />
      </div>
    </section>
  );
};

export default GitView;
