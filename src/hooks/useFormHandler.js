import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const useFormHandler = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let errors = {};

    if (!fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = "Phone Number must be digits only";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!course) {
      errors.course = "Course selection is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event, onSuccess) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const serviceId = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_TEMPLATE_SERVICE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY;

      const templateParams = {
        from_name: fullName,
        to_name: "Eman Time",
        from_email: email,
        from_phone: phone,
        course: course,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("SUCCESS!", response);

          // Send the auto-reply email
          const autoReplyTemplateId = import.meta.env
            .VITE_APP_REPLY_TEMPLATE_SERVICE_ID;

          const autoReplyParams = {
            from_name: fullName,
            from_email: email,
            course: course,
          };

          return emailjs.send(
            serviceId,
            autoReplyTemplateId,
            autoReplyParams,
            publicKey
          );
        })
        .then((response) => {
          console.log("Auto-reply SUCCESS!", response);
          toast.success("Request Submitted. Kindly Check Your Email");

          // Clear the form fields
          setFullName("");
          setPhone("");
          setEmail("");
          setCourse("");
          setErrors({});

          if (onSuccess) {
            onSuccess();
          }
        })
        .catch((error) => {
          console.log("FAILED..", error);
          toast.error("Something Went Wrong!");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    course,
    setCourse,
    errors,
    loading,
    handleSubmit,
  };
};

export default useFormHandler;
