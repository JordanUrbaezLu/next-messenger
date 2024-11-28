import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>
      Welcome, <b>{firstName}</b>! Thank you for signing up for{" "}
      <b>Next Messenger!</b>
    </h1>
  </div>
);

export default EmailTemplate;
