import React from "react";

const Department = (props) => {
  let className = "";

  if (props.image === undefined) {
    className = "-no-image";
  }

  return (
    <div className={`${props.modifier} ${className}`}>
      <div className="o-rhythm__container">
        <div className="o-hero__top">
          <div className="o-rhythm__row">
            <div className="o-hero__left">
              <div className="o-hero__titles">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <ul>
                  {props.rolesList &&
                    props.rolesList.map((role) => {
                      return <li>{role}</li>;
                    })}
                </ul>
              </div>
            </div>
            {props.image && (
              <div className="o-hero__right">
                <img alt={props.name + " illustration"} aria-hidden="true" src={props.image} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
