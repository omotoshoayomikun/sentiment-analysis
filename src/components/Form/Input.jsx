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

export const SearchInput = (props) => {

  const {id, label, handleOnchange, rel_styles, name, ...values} = props

  return (
    <>
        <div className="">
          <input
            {...values}
            className="rounded-3xl w-full py-1 px-6 border-[#007bff] focus:outline-[#007bff] border-2 text-[18px] "
            style={rel_styles}
            onChange={(e) => handleOnchange(e, name)}
          />
          {/* <i className={styles.input_icon}></i> */}
        </div>
    </>
  );
};


export const Checkbox = (props) => {
  return (
    <>
      <input type="checkbox" className="p-2" checked={props.checked} onChange={(e) => props.handleCheckbox(e, props.name)} />
    </>
  )
}

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
        onChange={(e) => props.handleOnchange(e)}
          value={props.value}
        />
    </>
  );
};
