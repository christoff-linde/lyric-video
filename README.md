## VIO 202 Theme 03: Lyric Video
*by Christoff Linde*

## View the Website
[https://christoff-linde.github.io/lyric-video/index.html](https://christoff-linde.github.io/lyric-video/index.html)

## The Project
This project was part of VIO202, a module I took during my BIS Multimedia studies
at University of Pretoria. The assignment was to design and create a lyric video
for any song of our choosing. To showcase the video, a companion website was to be
developed that ties in with the aesthetic look and feel of the original album cover.

I chose [Disillusioned](https://www.youtube.com/watch?v=BIsH686xWl0) by [A Perfect Circle](https://www.aperfectcircle.com/) as my song as it is one of my all time favourite
bands and albums.

## The Method
The project started out with storyboarding ideas for the lyric video, experimenting
with different layouts, colours and fonts. I chose a clean and precise font to match
the original font used on the album cover. Keeping the colour palette simple yet
striking, I used the main colours prominent on the original cover.

Actual creation of the lyric video was done entirely with Adobe After Effects. After
Effects was chosen for it's superior capability to create motion graphics.

To minimize the initial download size and consequently maximise performance, I opted
to export the After Effects video to `.SVG` with the help of the Bodymovin Plugin.
The `.SVG` animation is then loaded with `.JS` in the browser as a `.JSON` file.

All further styling was done with `.SCSS`, compiled to `.MIN.CSS`. Interaction
is handled with `.JS`.

I made use of [GitHub Actions](https://github.com/features/actions) to serve as a CI/CD Pipeline that
publishes the website.

## What I Learned
Throughout the project, I learnt how to create and animate motion graphics in
After Effects, and exporting them for use in a interactive web-related context.

Learning how to perform basic DOM manipulations using Javascript is another
concept I had to becode familiar with, as well as adding interactivity to an
otherwise mostly static page.

With GitHub Actions I learnt some of the basics of setting up and managing
a simple CD/CI Pipeline.

## What Can I Improve
The implementation of the project is not perfect, and some improvements can be made.
For e.g., the Javascript can be updated to use the latest ES standards. State
management for the animations and interactive elements could be improved to improve
the readability of the code.

As an alternative to the `.SVG` animation HTML Canvas could potentially be used,
which would provide easier interaction, something that exported Bodymovin format
does not necessarily provide.
