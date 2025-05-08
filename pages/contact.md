---
layout: page
title: Contact Us
permalink: /pages/contact/
---

Have a question, a news tip, or want to contribute? We
'd love to hear from you!

Fill out the form below, and we'll get back to you as soon as possible.

<form action="#" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject">
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  
  <button type="submit">Send Message</button>
</form>

### Other Ways to Reach Us

*   **Email:** {{ site.email | default: "info@example.com" }}
*   **Twitter:** {% if site.twitter_username %}<a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener noreferrer">@{{ site.twitter_username }}</a>{% else %}Not available{% endif %}

