---
title: BCS Methodologies Exam.
description: This is a post on My Blog about leveraging agile frameworks.
date: 2021-06-02
tags:
  - Apprenticeship
layout: layouts/post.njk
---
I needed to complete the BCS Methodologies Exam for the BCS Software Engineer Apprenticeship. The preparation for this exam was useful in understanding how software teams and product development works in general. 

- The purpose of the Software Development Life Cycle is to provide a set of steps to create a software end product. It’s just casual and NOT an explicit framework. 

{% for tag in collections.tagList | filterTagList %}
  {% set tagUrl %}/tags/{{ tag | slug }}/{% endset %}
  <a href="{{ tagUrl | url }}" class="post-tag">{{ tag }}</a>
{% endfor %}

<a href="{{ '/posts/firstpost/' | url }}">First post</a>
<a href="{{ '/posts/thirdpost/' | url }}">Third post</a>



