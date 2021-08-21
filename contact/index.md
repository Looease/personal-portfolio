---
layout: layouts/post.njk
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 2
---
<section class="center-container">
<form action="https://formspree.io/mpzyleon" method="POST">
        <br>
        <p>Please fill out the form below and I will get back to you. </p>
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
</section>