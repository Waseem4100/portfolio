
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import github from "@/public/github.png";
import linkdine from "@/public/linkdine.png";

export default function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");
    setEmailSubmitted(false);

    const form = e.currentTarget;

    const data = {
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setEmailSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contactSection">
      <div className="contactForm">
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2" role="status">
            Email sent successfully!
          </p>
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2" role="alert">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="emailSection">
            <label htmlFor="email">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              autoComplete="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="subjectSection">
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              maxLength={200}
              placeholder="Just saying hi"
            />
          </div>

          <div className="messagetSection">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="submitButton"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="conectSection">
        <h5 className="conectHeading">Let's Connect</h5>

        <p className="conectDescription">
          I'm currently looking for new opportunities, my inbox is
          always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/Waseem4100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="GitHub" id="social" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/waseem-ahmed117068/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkdine} alt="LinkedIn" id="social" />
          </Link>
        </div>
      </div>
    </div>
  );
}
