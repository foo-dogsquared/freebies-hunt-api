# Changelog
All notable changes to this project will be documented in this file starting from version 1.3.0.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

All specified dates are in standard [ISO 8601 date and time format](https://www.iso.org/iso-8601-date-and-time-format.html).

All words that are in **boldface** must refer to a **resource** while words in *italic* should refer to the *categories*.

## [Unreleased]

## [1.5.2] - 2019/10/01
### Added
- Add the following new resources:
    * *Computer-aided Design (CAD)*
        - **Processing**
    * *Open Educational Resources*
        - **Wikibooks**
    * *Research*
        - **Academic Torrents**
    * *Stock Resources*
        - **Free Web Illustrations**
        - **unDraw**
    * *YouTube Channels*
        - **javidx9**

### Changed

- Lighten the color of the "YouTube channel" section. 

### Removed
- Remove the following resources:
    * *Computer-aided Design (CAD)*
        - [AutoCAD Fusion 360](https://www.autodesk.com/products/fusion-360) - I forgot. It's not free.
    * *YouTube Channels*
        - [Jarvis Johnson](https://www.youtube.com/channel/UCoLUji8TYrgDy74_iiazvYA) - I just stopped watching. Nothing more. 
        - [Siraj Raval](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A) - Well, I don't know why I first recommend it here. 
        His content is becoming more "hype" in energy and more of an entertainment show than a n educational one. 
        Also, see [this article](https://www.theregister.co.uk/2019/09/27/youtube_ai_star/). 

## [1.5.1] - 2019/08/19
### Added
- Add the following new resources:
    * *Other Resource Lists*
        - **List of applications from the Arch Linux wiki**
    * *Computer-aided Design (CAD)*
        - **KiCAD**
    * *Electronics*
        - **KiCAD**
    * *Miscellaneous*
        - **Shotcut**
    * *Music*
        - **VSCO2 Community Edition**

### Removed
- Remove the following resources:
    * *Distance Learning Resources*
        - [LinkedIn Learning](https://learning.linkedin.com/) - most of its content are premium and I find a lot better courses over at edX and Coursera
        - [MongoDB University](https://university.mongodb.com/) - too niche for the list 
        - [The Odin Project](https://www.theodinproject.com/) - freeCodeCamp is a bit better regarding the community aspect
        - [Udemy](https://udemy.com) - same reason as LinkedIn Learning
    * *Katas*
        - [Coderbyte](http://coderbyte.com) - there's just too many        
    * *Open Educational Resources*
        - [Bookboon](https://bookboon.com/) - has (understandably) annoying download process to work with and I find better alternatives at Open Textbook Library
    * *Operating Systems*
        - [Solus](https://getsol.us/) - didn't able to use it anyways
    * *Massive Open Online Courses (MOOCS)*
        - [Software Engineering Micromasters course by The University of British Columbia](https://www.edx.org/micromasters/software-development) - has too many software engineering courses

## [1.5.0] - 2019/07/28
### Added
- Add the following new resources:
    * *Communities*
        - **itch.io**
        - **Game Jolt**
    * *Free and Open Access Textbooks*
        - **American Institute of Mathematics Approved Open Textbooks**
    * *Game Development*
        - **Byond**
        - **Game Jolt**
        - **itch.io**
        - **Kenney**
        - **TIC-80 Computer**
    * *Math*
        - **American Institute of Mathematics Approved Open Textbooks**
    * *Music*
        - **SampleSwap**
    * *Miscellaneous*
        - **NASA Software Catalog**
        - **What every CS majors should know?**
    * *Platforms For Your Future Apps*
        - **Zeit Now** 
    * *Stock Resources*
        - **Incompetech** 
        - **SampleSwap**
        - **YouTube Audio Library**
- Add a new section, *Games*, with the following new resources:
    - **0 A.D.**
    - **Cataclysm: Dark Days Ahead**
    - **Dwarf Fortress**
    - **id Software's Games**
    - **Megaman Maker**
    - **OpenTTD**
    - **Powder Toy**
    - **Super Tux Kart**
    - **Ultima Ratio Regum**
    - **Veloren**
- Update and add **Repl.it** at *Platforms For Your Future Apps*

## [1.4.1] - 2019-07-06
### Added
- Add the following new resources:
    - **Anaconda** at *Mathematics*
    - **ImageMagick** at *Graphics Design*
    - **Kdenlive** at *Miscellaneous*
    - **LeoCAD** at *Computer-aided Design (CAD)*
    - **Rambox** at *Communication*

## [1.4.0] - 2019-05-13
### Added
- Add the following new resouces:
    - **Data.gov** at *Research*
    - **Glitch** in *Platform For Your Future Apps*
    - **O’Reilly Programming Newsletter** in *Newsletters*
    - **Red Blob Games** in *Game Development* and *Blogs* section
    - **Scribus** in *Design*
    - **Simple Icons** at *Stock Resources* section
- Add a new section, *Computer-aided Design (CAD)*, with the following resources:
    - **Autodesk Fusion 360**
    - **Blender**
    - **BRL-CAD**
    - **FreeCAD**
    - **Google Sketchup**
    - **Onshape**
    - **OpenSCAD**
- Update and add **LaTeX** in *Documentations* section

### Removed
- Remove **Hacker Tools** from the *Other Resources List* section. It doesn't really make sense as a resource list now that I think about it.

### Changed
- Change the personal comment on **Vim**
- Rename the *Design* to *Graphics Design* as part of adding the *Computer-aided Design* section for less chances of confusion

## [1.3.1] - 2019-05-01
### Added
- Add a personal comment on **Jetbrains Tool Suite**
- Add the following new resources:
    - **FreeBSD** at *Open Content Communities*
    - **GNU Software** at *Open Content Communities*
    - **Intel Student Pack** in *Student Packs*
    - **Internet Engineering Task Forces** in *Programming Styles and Standards*
    - **National Institute of Science and Technology** in *Research* and *Open Content Communities*
    - **Open Source Initiative** at *Open Content Communities*
    - **Vectorworks Educational Suite** in *Student Packs*
    - **World Wide Web Consortium** in *Programming Styles and Standards*

### Removed
- Remove **Postanly** from *Newsletters* section. It's abandoned now which goes against the definition of being a newsletter.

## [1.3.0] - 2019-04-24
### Changed
- Update the schema of the freebie categories
- Update the data reflecting the newly revised schema
- Change `Category.children` into an array instead of a hashmap
- Sanitize the `Category.children` items' properties
