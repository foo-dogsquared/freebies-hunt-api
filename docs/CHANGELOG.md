# Changelog
All notable changes to this project will be documented in this file starting from version 1.3.0.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

All specified dates are in standard [ISO 8601 date and time format](https://www.iso.org/iso-8601-date-and-time-format.html).

All words that are in **boldface** must refer to a **resource** while words in *italic* should refer to the *categories*.

## [Unreleased]
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
