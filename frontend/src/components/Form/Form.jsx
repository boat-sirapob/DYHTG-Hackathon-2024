// import "./Form.css";

// export default function Form({ title, placeholder, type }) {
//   return (
//     <FormLayout
//       title={title}
//       placeholder={placeholder}
//       type={type}
//     ></FormLayout>
//   );
// }

// function FormLayout({ title, placeholder, type }) {
//   if (type === "difficulty") {
//     return (
//       <FormDifficulty title={title} placeholder={placeholder}></FormDifficulty>
//     );
//   } else if (type === "large") {
//     return (
//       <FormInputLarge title={title} placeholder={placeholder}></FormInputLarge>
//     );
//   } else {
//     return (
//       <FormInputSmall title={title} placeholder={placeholder}></FormInputSmall>
//     );
//   }
// }

// function FormDifficulty({ title }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <div className="difficulties">
//         <>
//           <input
//             className="input-box difficulty-easy"
//             type="checkbox"
//             id="easy"
//             name="easy"
//             hidden
//           />
//           <label for="easy" className="input-box">
//             Easy
//           </label>
//         </>
//         <>
//           <i
//             className="input-box difficulty-medium"
//             type="checkbox"
//             id="medium"
//             name="medium"
//             hidden
//           />
//           <label for="medium" className="input-box difficulty-hard">
//             Medium
//           </label>
//         </>
//         <>
//           <input
//             className="input-box easy"
//             type="checkbox"
//             id="hard"
//             name="hard"
//             hidden
//           />
//           <label for="hard" className="input-box">
//             Hard
//           </label>
//         </>
//       </div>
//     </div>
//   );
// }

// function FormInputSmall({ title }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <input className="input-box"></input>
//     </div>
//   );
// }

// function FormInputLarge({ title }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <textarea className="input-box-large"></textarea>
//     </div>
//   );
// }

// import "./Form.css";

// import { Controller, useForm } from "react-hook-form";

// import React from "react";

// export default function FormInput({ title, placeholder, type, name, control }) {
//   return (
//     <FormLayout
//       title={title}
//       placeholder={placeholder}
//       type={type}
//       name={name}
//       control={control}
//     />
//   );
// }

// function FormLayout({ title, placeholder, type, name, control }) {
//   if (type === "difficulty") {
//     return (
//       <FormDifficulty
//         title={title}
//         name={name}
//         control={control}
//       ></FormDifficulty>
//     );
//   } else if (type === "large") {
//     return (
//       <FormInputLarge
//         title={title}
//         name={name}
//         control={control}
//       ></FormInputLarge>
//     );
//   } else {
//     return (
//       <FormInputSmall
//         title={title}
//         name={name}
//         control={control}
//       ></FormInputSmall>
//     );
//   }
// }

// function FormDifficulty({ title, name, control }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <div className="difficulties">
//         {["easy", "medium", "hard"].map((level) => (
//           <Controller
//             key={level}
//             name={`${name}[${level}]`}
//             control={control}
//             render={({ field }) => (
//               <>
//                 <input
//                   {...field}
//                   className="input-box"
//                   type="checkbox"
//                   id={level}
//                   hidden
//                 />
//                 <label htmlFor={level} className="input-box">
//                   {level.charAt(0).toUpperCase() + level.slice(1)}
//                 </label>
//               </>
//             )}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function FormInputSmall({ title, name, control }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <input {...field} className="input-box" placeholder={title} />
//         )}
//       />
//     </div>
//   );
// }

// function FormInputLarge({ title, name, control }) {
//   return (
//     <div className="form-box">
//       <div className="form-text">{title}</div>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <textarea
//             {...field}
//             className="input-box-large"
//             placeholder={title}
//           />
//         )}
//       />
//     </div>
//   );
// }

import "./Form.css";

import { Controller, useForm } from "react-hook-form";

import React from "react";

export default function FormInput({ title, placeholder, type, name, control }) {
  return (
    <FormLayout
      title={title}
      placeholder={placeholder}
      type={type}
      name={name}
      control={control}
    />
  );
}

function FormLayout({ title, placeholder, type, name, control }) {
  if (type === "difficulty") {
    return (
      <FormDifficulty
        title={title}
        name={name}
        control={control}
      ></FormDifficulty>
    );
  } else if (type === "large") {
    return (
      <FormInputLarge
        title={title}
        name={name}
        control={control}
        placeholder={placeholder}
      ></FormInputLarge>
    );
  } else {
    return (
      <FormInputSmall
        title={title}
        name={name}
        control={control}
        placeholder={placeholder}
      ></FormInputSmall>
    );
  }
}

function FormDifficulty({ title, name, control }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <div className="difficulties">
        {["easy", "intermediate", "hard"].map((level) => (
          <Controller
            key={level}
            name={`${name}[${level}]`}
            control={control}
            render={({ field }) => (
              <>
                <input {...field} type="checkbox" id={level} hidden />
                <label
                  htmlFor={level}
                  className={`input-box difficulty-${level}`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </label>
              </>
            )}
          />
        ))}
      </div>
    </div>
  );
}

function FormInputSmall({ title, name, control, placeholder }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input {...field} className="input-box" placeholder={placeholder} />
        )}
      />
    </div>
  );
}

function FormInputLarge({ title, name, control, placeholder }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            className="input-box-large"
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}
