import React from "react";

const Department = (props) => {
  let className = "";

  // if (props.department.deptImg === undefined) {
  //   className = "-no-image";
  // }

  return (
    <div className={`${props.modifier} ${className}`}>
      <div className="o-rhythm__container">
        <div className="o-hero__top">
          <div className="o-rhythm__row">
            <div className="o-hero__left">
              <div className="o-hero__titles">
                <h2>{props.department.name}</h2>
                <p>{props.department.description}</p>
                <ul>
                  {props.department.rolesList &&
                    props.department.rolesList.map((role) => {
                      return <li>{role}</li>;
                    })}
                </ul>
              </div>
            </div>
            {props.department.deptImg && (
              <div className="o-hero__right">
                <img
                  alt={props.department.name + " illustration"}
                  aria-hidden="true"
                  src={props.department.deptImg.childImageSharp.fluid.src}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
