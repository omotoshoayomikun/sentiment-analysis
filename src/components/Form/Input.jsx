import react from "react";

export const Input = (props) => {

  const {id, label, handleOnchange, rel_styles, name, ...values} = props

  return (
    <>
      <div className="">
        <label className="text-[13px] font-[600]" htmlFor="">
          {label}
        </label>
        <div className={` mt-1`}>
          <input
            {...values}
            className={`input`}
            style={rel_styles}
            onChange={(e) => handleOnchange(e, name)}
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
