import React, { useState } from "react";
import CustomButton from "../CustomButton";
import ContactForm from "../contactForm/ContactForm";
import GitStagedView from "./GitView/GitStagedView";
import GitViewHeader from "./GitView/GitViewHeader";

const GitView = () => {
  const [error, setError] = useState("");

  return (
    <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
      <GitViewHeader />
      <div className="flex space-x-20 ml-10 mt-10">
        <div className="flex flex-col">
          <GitStagedView />
          {error && <p>{error}</p>}
        </div>
        <ContactForm setError={setError} />
      </div>
    </section>
  );
};

export default GitView;
