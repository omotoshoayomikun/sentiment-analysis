import react from "react";

export const Input = (props) => {
  return (
    <>
      <div className="">
        <label className="text-[13px] font-[600]" htmlFor="">
          {props.label}
        </label>
        <div className={` mt-1`}>
          <input
            type="text"
            placeholder={props.placeholder}
            className={`input`}
            style={props.styles}
            onChange={props.handleOnchange}
          />
          {/* <i className={styles.input_icon}></i> */}
        </div>
      </div>
    </>
  );
};

export const TextArea = (props) => {
  return (
    <>
      <label className="text-[13px] font-[600]" htmlFor="">
        {props.label}
      </label>
      <textarea
        name=""
        id=""
        className="textarea"
        placeholder={props.placeholder}
        style={props.styles}
        onChange={props.handleOnchange}
      ></textarea>
    </>
  );
};
