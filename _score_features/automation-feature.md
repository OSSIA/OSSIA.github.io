---
layout: score-feature
title:  "Automation"

permalink: /score/features/automation.html
category: "site-score"
image: /assets/features/automation.png
description: "Discover how to automate internal and external parameters"

tag: "Structure"
visible: true
---

- Documenter les différents types d'automation: 
  * Normale (courbe)
  * Couleur
  * 2D
  
- Documenter toutes les options de drop possible 
  * Depuis l'explorer
  * En cliquant sur automate

- Tween
  
- Comportement des unités & tableau: 
  - foo:/bar@[1][2]
  - foo:/bar@[color.hsv]
  - foo:/bar@[color.rgb.r]

- Comportement des ports
  
- Enregistrement

- Fonctions right-click

- Mode pen : en gardant alt appuyé


### 2D Spline (X-Y automation)

It is possible to use math formulas to generate a specific spline. 
To do so, right-click on a spline, and select "Generate curve" in the menu. 
The available variable is t. It is evaluated between 0 and 1.

The syntax uses ExprTK (see relevant feature page).
Here are some useful examples:

#### Circle

{% highlight matlab %}
var tp :=  2 * PI * t;
x := tp * cos(tp);
y := tp * sin(tp);
{% endhighlight %}

#### Spiral

{% highlight matlab %}
var tp :=  2 * PI * t;
x := tp * cos(tp);
y := tp * sin(tp);
{% endhighlight %}

#### Expanding spiral

{% highlight matlab %}
var tp :=  2 * PI * t;
x := 0.04 * exp(0.3 * tp) * cos(tp);
y := 0.04 * exp(0.3 * tp) * sin(tp);
{% endhighlight %}

#### Lissajoux

{% highlight matlab %}
var tp :=  2 * PI * t;
x := cos(3 * tp);
y := sin(2 * tp);
{% endhighlight %}

{% highlight matlab %}
var tp :=  2 * PI * t;
x := cos(5 * tp);
y := sin(3 * tp);
{% endhighlight %}

#### Hypotrochroids

Star 1:
{% highlight matlab %}
var tp := 6 * PI * t;
var a := 5;
var b := 3;
var d := 3;
x := (a - b) * cos(tp) + d * cos(tp * (a - b) / b);
y := (a - b) * sin(tp) - d * sin(tp * (a - b) / b);
{% endhighlight %}

Star 2:
{% highlight matlab %}
var tp := 6 * PI * t;
var a := 5;
var b := 3;
var d := 5;
x := (a - b) * cos(tp) + d * cos(tp * (a - b) / b);
y := (a - b) * sin(tp) - d * sin(tp * (a - b) / b);
{% endhighlight %}

#### Others

See https://en.wikipedia.org/wiki/Parametric_equation for inspiration.

{% highlight matlab %}
var tp := 2 * PI * t;
var a := 4;
var b := 1;
var c := 4;
var d := 1;

var j := 3;
var k := 3;
x := cos(a * tp) - pow(cos(b * tp), j);
y := sin(c * tp) - pow(sin(d * tp), k);
{% endhighlight %}