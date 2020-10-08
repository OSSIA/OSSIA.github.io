---
layout: score-feature
title:  "Bytebeat"

permalink: /score/features/bytebeat.html
category: "site-score"

image: /assets/features/missing.png
description: "Dope 8-bit sound generator"

tag: "Audio"
visible: true
---

# What is bytebeat?

- https://greggman.com/downloads/examples/html5bytebeat/html5bytebeat.html
- http://nightmachines.tv/the-absolute-beginners-guide-to-coding-bytebeats.html
- https://github.com/greggman/html5bytebeat
- https://github.com/radavis/bytebeat 
- http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html

# Example
{% highlight cpp %}
(((t<<1)^((t<<1)+(t>>7)&t>>12))|t>>(4-(1^7&(t>>19)))|t>>7)
{% endhighlight %}