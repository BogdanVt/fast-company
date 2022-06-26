export function validator(data, config) {
<<<<<<< HEAD
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        if (typeof data === "boolean") {
          statusValidate = !data;
        } else if (typeof data === "object") {
          // if (data.length === 0) {
          //   statusValidate === true;
          // }
          statusValidate = data === "";
        } else {
          statusValidate = data.trim() === "";
=======
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
        case "isRequired": {
            if (typeof data === "boolean") {
                statusValidate = !data;
            } else {
                statusValidate = data.trim() === "";
            }
            break;
        }
        case "isEmail": {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            statusValidate = !emailRegExp.test(data);
            break;
        }
        case "isCapitalSymbol": {
            const capitalRegExp = /[A-Z]+/g;
            statusValidate = !capitalRegExp.test(data);
            break;
        }
        case "isContainDigit": {
            const digitRegExp = /\d+/g;
            statusValidate = !digitRegExp.test(data);
            break;
        }
        case "min": {
            statusValidate = data.length < config.value;
            break;
        }
        default:
            break;
>>>>>>> 65ebeed23991602076a54853ff2fbf2199141b8c
        }
        break;
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }
      case "noQqual": {
        statusValidate = data.length === 0;
        break;
      }

      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
