import emailjs from "@emailjs/browser";

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => value.trim() !== "";

const isBetween = (length, min, max) =>
  length >= min && length <= max;

const checkName = (name) => {
  const min = 3;
  const max = 25;

  if (!isRequired(name))
    return "Name cannot be blank.";

  if (!isBetween(name.length, min, max))
    return `Name must be between ${min} and ${max} characters.`;

  return true;
};

const checkEmail = (email) => {
  if (!isRequired(email))
    return "Email cannot be blank.";

  if (!isEmailValid(email))
    return "Email is not valid.";

  return true;
};

const checkMessage = (message) => {
  const min = 3;
  const max = 1000;

  if (!isRequired(message))
    return "Message cannot be blank.";

  if (!isBetween(message.length, min, max))
    return `Message must be between ${min} and ${max} characters.`;

  return true;
};

const formValidation = async (
  formData,
  setFormData,
  setErrData,
  initialFormData,
  initialErrData
) => {
  const validName = checkName(formData.name.trim());
  const validEmail = checkEmail(formData.email.trim());
  const validMessage = checkMessage(formData.message.trim());

  setErrData({
    nameError: typeof validName === "boolean" ? "" : validName,
    emailError: typeof validEmail === "boolean" ? "" : validEmail,
    messageError: typeof validMessage === "boolean" ? "" : validMessage,
  });

  if (
    typeof validName !== "boolean" ||
    typeof validEmail !== "boolean" ||
    typeof validMessage !== "boolean"
  ) {
    return;
  }

  const templateParams = {
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    message: formData.message.trim(),
  };
  

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("Message sent successfully!");

    setFormData(initialFormData);
    setErrData(initialErrData);
  } catch (error) {
    console.error("EmailJS Error:", error);

    alert("Failed to send message.");
  }
};

export { formValidation };