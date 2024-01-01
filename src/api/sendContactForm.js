export const sendContactForm = async (data, isVerified) => {
  if (!isVerified) {
    return Promise.reject(new Error("Please verify ReCAPTCHA!"));
  }

  try {
    const response = await fetch("https://formspree.io/f/mwkgkknl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    } else {
      throw new Error("Failed to send message!");
    }
  } catch (error) {
    throw new Error(`Error occurred: ${error.message}`);
  }
};
