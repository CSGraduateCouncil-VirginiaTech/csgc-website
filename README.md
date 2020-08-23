# [Computer Science Graduate Council @ Virginia Tech (CSGC@VT)](https://csgrad.cs.vt.edu/)

![Jekyll site CI](https://github.com/CSGraduateCouncil-VirginiaTech/csgc-website/workflows/Jekyll%20site%20CI/badge.svg)

## What is this group about?

The Graduate Council (GC) represents the interests of the CS graduate student body at VT both within the department and outside. We provide an interface between the student body and the faculty members, help organize social events among graduate students, and help incoming students become familiar with departmental procedures and activities. Outside the department, we voice student opinions in various graduate school forums and promote social engagements with the wider graduate student community.

## Who this pertains to

To any Graduate students at Virginia Tech interested in aiding the Graduate Council website.

## Can I contact you? - Yes (_if you have a VT email address_)

* Please email the [mailing list](https://groups.google.com/a/vt.edu/forum/#!forum/csgc-g) for any non-private issues.
* Please address sensitive questions or concerns to [gradcouncil@cs.vt.edu](mailto:gradcouncil@cs.vt.edu) which will be sent only to the current year's E-board members.

## How can I contribute?

There are a couple things you have to do first

1. Sign up to be a part of the organization
  > Asking a [current member](https://csgrad.cs.vt.edu/Officers/) to add you.
2. Create an issue and/or pull request
3. Request one of the e-board members for a code review
4. Once it's been accepted, merge and then delete the branch 

## How do I create a new page?

The Grad Council Website is a flat-directory, so all of the web pages are in the main directory, with all of the images or other files in their specified directory.
That being said, each markdown is generated "in-place" to it's html result and used in the website.

Assumming you know markdown, you have to do the following to add a new markdown page.

1. In the [_config.yml](https://github.com/CSGraduateCouncil-VirginiaTech/csgc-website/blob/master/_config.yml) file, locate the main_pages: section.

It should look something like [this](https://github.com/CSGraduateCouncil-VirginiaTech/csgc-website/blob/master/_config.yml#L22):
```yaml
main_pages:
  - url: "/meetings/"
    title: "Contact and Meeting Info"
```
You should add the relative url and the title inline in the same format.
The title will be the text on the sidebar and the relative url will be the hyperlink generated on the sidebar.
For the sample page "/temp/" we will use the following section.
```yaml
main_pages:
  - url: "/meetings/"
    title: "Contact and Meeting Info"
.
.
.
  - url: "/temp/"
    title: "Hello world"
```

2. Making the file

Create the file using an appropriate name.
It has to be a markdown file.
In the top section it should include the following specification.

```yaml
---
layout: page
title: Temp Hello World
permalink: /temp/
---
.
.
.
```

The layout should always be page, it determines how the page should be rendered to html.
The title is the top of the page once the webpage is opened.
Finally, the permalink is the relative hyperlink alongside the website.
NOTE: the permalink here HAS to match the url in the _config.yml file, otherwise the page won't be reachable.

3. Test your website

Make sure you test your website in your own branch before making a pull request.
I simplified this by creating the [Makefile](https://github.com/CSGraduateCouncil-VirginiaTech/csgc-website/blob/master/Makefile) and all you have to do is run the cmd `make` to attempt to generate the website locally.

## Technologies Used

* [Jekyll](http://jekyllrb.com)
* [Hyde](https://github.com/poole/hyde)
* [GitHub Actions](https://github.com/features/actions)
