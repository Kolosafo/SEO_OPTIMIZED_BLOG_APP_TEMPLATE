"use client";

import { PageContainer } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { useContactSupport } from "@/lib/support/supportService";
import { Mail, HelpCircle, MessageSquare, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);

  const { mutate, isPending } = useContactSupport(() => {
    setSuccess(true);
    setEmail("");
    setMessage("");
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setMessageError("");

    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      hasError = true;
    } else if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters long");
      hasError = true;
    }

    if (hasError) return;

    mutate({ email: email.trim(), message: message.trim() });
  };

  return (
    <div className="bg-background min-h-screen">
      <PageContainer>
        {!success ? (
          <div className="flex flex-col w-full max-w-2xl mx-auto py-8 px-4">
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                How can we help you?
              </h1>
              <p className="text-muted-foreground">
                Send us a message and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Email us directly
                  </h3>
                  <Link
                    href="mailto:app.bookflow@yahoo.com"
                    className="text-primary hover:text-primary/90 hover:underline"
                  >
                    app.bookflow@yahoo.com
                  </Link>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={`w-full px-4 py-3 rounded-lg border ${
                    emailError
                      ? "border-destructive focus:ring-destructive focus:border-destructive"
                      : "border-input focus:ring-ring focus:border-ring"
                  } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-colors`}
                  id="email"
                  type="email"
                  placeholder="yourmail@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  disabled={isPending}
                  required
                />
                {emailError && (
                  <p className="mt-2 text-sm text-destructive flex items-center">
                    <span className="mr-1">⚠</span>
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageError("");
                    }}
                    rows={8}
                    value={message}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                      messageError
                        ? "border-destructive focus:ring-destructive focus:border-destructive"
                        : "border-input focus:ring-ring focus:border-ring"
                    } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-colors resize-none`}
                    placeholder="Describe your issue, question, or feedback in detail..."
                    disabled={isPending}
                    required
                  />
                </div>
                {messageError && (
                  <p className="mt-2 text-sm text-destructive flex items-center">
                    <span className="mr-1">⚠</span>
                    {messageError}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full"
                size="lg"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24-48 hours during business days
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full min-h-[80vh] justify-center items-center">
            <div className="text-center max-w-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Message Sent Successfully!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thanks for contacting support! We've received your message and
                will get back to you soon.
              </p>
              <Button onClick={() => setSuccess(false)} variant="outline">
                Send Another Message
              </Button>
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default Page;
