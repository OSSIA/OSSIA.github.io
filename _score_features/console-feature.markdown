---
layout: score-page
title:  "Script console"

permalink: /score/features/console.html
category: "site-score"

image: /assets/features/console.png
description: "Scripting workflows with the console"

tag: "Scripting"
---

- Fonctions disponibles actuellement: 
  * Fournies par `EditJsContext`

- Shortcut: ctrl-shift-C
# Examples


{% highlight qml %}
// Creates an OSC device named foo. Messages will be sent from score to 127.0.0.1:5678.
// Score will listen to messages on port 1234.
Score.createOSCDevice("foo", "127.0.0.1", 5678, 1234);

// Creates an OSC address on the device foo, named /bar/baz. It will receive color.rgba types.
// All the usual ossia unit names are accessible, 
// as well as useful names such as the ones found in [addresses](addresses doc)
Score.createAddress("foo:/bar/baz", "color.rgba");

// Finds an object in the current score.
// The name is the object name, put in the inspector
var myObject = Score.find("the object name");

// Creates an automation. The first argument must be a valid pointer to an interval 
// found by Score.find(...).
Score.automate(myInterval, "foo:/my/address");

// Undo-redo
Score.undo();
Score.redo();

// Transport
Score.play();
Score.stop();

{% endhighlight %}