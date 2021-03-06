import React from 'react';

import { Button } from '../../components';
import config from '../../config';

export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action={config.formActionURL}
      method="POST"
    >
      <input type="text" name="name" placeholder="Your name" />
      <input htmlFor="email" name="_replyto" placeholder="Email address" />
      <input type="text" name="_subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message"></textarea>
      <input type="hidden" name="_next" value={config.formSubmittedURL} />
      <input type="text" className="hidden" name="_gotchya" />
      <Button type="submit">Send</Button>
    </form>
  );
}