---
layout: layouts/post.njk
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 2
---
<form action="https://formspree.io/mpzyleon" method="POST">
          <br>
          <label>
            Your Name:
            <input type="text" name="name">
            </label>
            <br>
        <label>
          Your email:
          <input type="text" name="_replyto">
          </label>
          <br>
          <label>
          Your message:
          <textarea name="message"></textarea>
          </label>
          <button type="submit" class="button">Send</button>
            <h1 class="thanks">Thank you!</h1>
          </form>
