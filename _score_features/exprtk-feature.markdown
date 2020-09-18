---
layout: score-page
title:  "Math expressions"

permalink: /score/features/exprtk.html
category: "site-score"

image: /assets/features/exprtk.png
description: "Use simple formulas to create mappings, filters and synths"

tag: "Scripting"
---

The four processes : 
- Audio Generator
- Audio Mapping 

- Value Generator
- Custom Mapping (Value)

Allow to write simple math expressions.
This uses http://www.partow.net/programming/exprtk/index.html underneath for solving the expressions.

The expression can be written on multiple lines
Numerous math functions are available: sin, cos, abs, log... as well as the usual pi, etc... constants.

## Examples

### Value generator

#### Logistic function
{% highlight matlab %}
if(m1 == 0) { 
  m2 := 0.8; 
  m1 := 1; 
}

var r := 4 * a;
m2 := r * m2 * (1 - m2);
m2;
{% endhighlight %}

### Value mapper

### Add jitter
{% highlight matlab %}
var rnd_m := pow(2, 31);
var rnd_a := 1103515245;
var rnd_c := 12345;

if(m2 == 0) { 
  m2 := 1; 
  m1 := 12345678; 
}

var r := (rnd_a * m1 + rnd_c) % rnd_m;
m1 := r;
x + a * r / (2^33);
{% endhighlight %}

### Audio generator

### Sine wave
{% highlight matlab %}
var freq := 20 + a * 500;
freq := 2 * pi * m1[0] *  freq * b / fs;

m1[0] += 1;

out[0] := b * cos( freq );
out[1] := b * cos( freq );
{% endhighlight %}

### Square wave
{% highlight matlab %}
var freq := 20 + a * 500;
freq := 2 * pi * m1[0] *  freq * b / fs;

m1[0] += 1;

var res := cos(freq);
res := (res >= 0) ? 1 : -1;

out[0] := b * res;
out[1] := b * res;
{% endhighlight %}
### Wobbly synth

{% highlight matlab %}
var freq_l := 225 +  cos(t/(100*(a+0.1)));
freq_l := 2 * pi * m1[0] *  freq_l * b / fs;

var freq_r := 215 +  sin(t/(100*(a+0.1)));
freq_r := 2 * pi * m1[0] *  freq_l * b / fs;

m1[0] += 1;

out[0] := b * cos( freq_l );
out[1] := b * cos( freq_r );
{% endhighlight %}

### Audio filter

### Crude distortion

2-channel version:
{% highlight matlab %}
out[0] := clamp(0,  tan(x[0]*log(1 + 200 * a)), 1);
out[1] := clamp(0,  tan(x[1]*log(1 + 200 * a)), 1);
{% endhighlight %}

Any number of channel version:
{% highlight matlab %}
var n := x[];

for (var i := 0; i < n; i += 1) {
  var dist := tan(x[i]*log(1 + 200 * a));
  out[i] := clamp(0, dist, 1);
}
{% endhighlight %}


## Available variables

### Everywhere
* t: the current time
* pos: the position in the interval
* a, b, c: three provided controls
* m1, m2, m3: three provided variables (which will keep their value across a tick)
  * In the audio cases they are arrays.

### Value mapping

* x: the value of the current input
* dt: the time delta
  
### Audio mapping 

* x: the value of the current sample
* out: where to write the output
* px: the value of the previous sample
* fs: the sampling rate

### Value generator

* dt: the time delta

### Audio generator 

* out: where to write the output
* fs: the sampling rate