export const submitForm = async (formData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve({ message: "Form submitted successfully!" });
    }, 2000); // simulate 2-second network delay
  });
};
