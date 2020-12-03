---
title: 'Reality Bites'
subtitle: 'Design Systems For The Real World'
date: '2020-11-01'
categories: ['design', 'design systems']
type: 'blog'
intro: "I originally gave this as a talk for a local UX design meetup a few years back. I was looking for a different presentation in my google slides the other day, and I stumbled across this one. While flipping through it a couple things came to mind. First, the talk had some moments of calamity, both my fault &#40;my notifications to take my garbage and recycling out popping up constantly&#41;, and not my fault &#40;the beer cycle folks pedaling by the open cargo door to the space we were in, their woooooooos! punctuating my talk&#41;. That aside, looking through the slides I thought to myself, there is still some pretty relevant content here, issues I am still dealing with, years later. If I am still struggling, chances are other people working on real world designs systems are too, so I thought I'd distill the good bits and relevant parts down to a blog post."
image_section2: '/images/backstory.svg'
---

For last few years most of my design work has focused on Design Systems. In 2014 I found myself working for a <a href ="">boutique agency</a> that focused on front-end component based design. Our usual deliverable was a pattern library full of hand-crafted components. Each one, designed responsively, with thorough internal review, neatly handed over to clients to implement into their site or product.


<div class="image-left">
    <img src="/images/pattern.png" />
    <h3>Making beautiful, hand-crafted design systems since 2014.</h3>
</div>


The process wasn’t always the same… some were complete new style guides, or pattern libraries from the ground up and some took existing experiences and componentized into libraries, however, each resulted in a perfect pattern library.

### Perfect Pattern Libraries
<img src="/images/patterns.gif" />

I joined <a href="">Airship</a> in 2016, and I was super excited to bring my expertise in systems thinking and design to the Ship. When I started I discovered that the Product Team had an existing pattern library.

It was a pretty standard catalog of their front-end components built with Pattern Lab in code. To be honest, it was pretty similar to the shiny, libraries I had built for all sorts of clients.

**However, there was some big problems.**

From what I could tell, no one was using this library. It was out-of-date, with no clear plan for it’s maintenance and up keep. What’s worse… me in all my newness, every time I met a new co-worker and they asked me politely what I was working on, I would exclaim, "our pattern library!". To which most people responded, "uhhhh, what’s that?". **Tumbleweeds blowing through pattern library town. No one even knew there was one.** I couldn’t stop thinking… if this is how it is for Airship's pattern library, what happened to all my perfect pattern library babies when they went out in the world?

<div class="twitter-embedd">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">zombie style guides — style guides that aren&#39;t maintained and part of your process. they die and rot. they eat your brains.</p>&mdash; jina (@jina) <a href="https://twitter.com/jina/status/638850299172667392?ref_src=twsrc%5Etfw">September 1, 2015</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

This tweet from <a href="">Jina Anne</a> came instantly to mind. Could it be true, could my perfect pattern libraries all be zombies?

<img class="center" src="/images/zombie.gif" />

So I got to thinking… a lot. About good systems, and how I could make a design system for Airship that would be usable, flexible, and adoptable. Something people could see the value in, and also get excited about.

<img class="center" src="/images/reality-bites-crew.png" />

I found inspiration and parallel in the most unlikely of places. The arguably annoying 90’s homage, <a href="">Reality Bites</a>. When I was 13 it was the coolest, it sparked in me and all my friends a love of bad boys in bands.

So for those who haven’t seen this movie or for those who have and have forgotten this movie is about a group of Gen X friends that are transitioning from college life to the struggles and problems of adulting in the real world. Struggles that range from coming out, to the loss of a loved one.  Mostly it's a 90’s rom-com, which centers around the main character, Lelaina’s love triangle with Troy, (an aimless, loser, bad boy, musician), and Ben Stiller (not the _actual_ Ben, but a character Ben plays but still basically Ben Stiller). 

**Tangent:** I've heard people describe these characters as shit heads, and they are… but I hear people describe millennial the same, just slightly different. Sure they self-consumed, pretentious, and overly cynical for their age, but that’s not particular to Gen X or millennial, that’s just true of youth.

Just like the shit heads in Reality bites, our design systems struggle out in the real world. They suffer from some Real World Problems. In order to create a great design system you first need to identify your problems:

## Real World Problems

<div class="problems">
    
<div class="problem pain">
    <span class="pain-inner">PAIN</span>
</div>
<h4 class="problem-header">What does your system need to solve for?</h4>
        
<div class="problem people">
    <span class="people-inner">PEOPLE</span>
</div>
<h4 class="problem-header">Who are the people involved, and what are their needs?</h4>

<div class="problem process">
    <span class="process-inner">PROCESS</span>
</div>
<h4 class="problem-header">How is the work done?</h4>

</div>

Let's dive in a little deeper...

<div class="image-left">
    <div class="problem pain">
        <span class="pain-inner">PAIN</span>
    </div>
    <h3>Identifying the pain points</h3>
</div>

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Pattern/Component Inventory:</h4>
</div>

- Are there consistency issues?

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Code Inventory:</h4>
</div>

- How is your front-end code organized?
- What technologies are you using?

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Human Friendly:</h4>
</div>

- How responsive are your interfaces?
- Is it accessible?
- What voice are you using to talk to your users?
- Are you using animation?

<div class="image-left">
    <div class="problem people">
        <span class="people-inner">PEOPLE</span>
    </div>
    <h3>Identifying the people problems</h3>
</div>

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Team:</h4>
</div>

- Do you have an existing design system, pattern library or style guide?
- Do you have design system allies?
- Are there resource bottlenecks?

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Buy In:</h4>
</div>

- Do you need management buy in?
- Do you need larger organizational buy in?

<div class="image-left">
    <div class="problem process">
        <span class="process-inner">PROCESS</span>
    </div>
    <h3>Identifying the process problems</h3>
</div>

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Tools & Resources:</h4>
</div>

- Do your designers code? Do they push pixels? Do they do both?
- What tools are people using?
- What resources do they need to get their work done?

<div class="image-left">
    <img src="/images/circle-1.svg" />
    <h4>Implementation:</h4>
</div>

- What is the approval and quality assurance process you need?
- Does your system need to work with existing processes?
- What does automation look like for your design system?

At Airship we had (and continue to have) most if not all of these real world problems. 

