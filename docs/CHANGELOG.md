# Changelog
All notable changes to this project will be documented in this file starting from version 1.3.0.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

All specified dates are in standard [ISO 8601 date and time format](https://www.iso.org/iso-8601-date-and-time-format.html).

## [Unreleased]

## [1.3.1] - 2019-05-01
### Added
- Add a personal comment on **Jetbrains Tool Suite**
- Add the following resources:
    - **National Institute of Science and Technology** in *Research* and *Open Content Communities* section
    - **FreeBSD** at *Open Content Communities* section
    - **GNU Software** at *Open Content Communities* section
    - **Open Source Initiative** at *Open Content Communities* section
    - **World Wide Web Consortium** in *Programming Styles and Standards*
    - **Internet Engineering Task Forces** in *Programming Styles and Standards*
    - **Intel Student Pack** in *Student Packs*
    - **Vectorworks Educational Suite** in *Student Packs*

### Removed
- Remove **Postanly** from *Newsletters* section. It's abandoned now which goes against the definition of being a newsletter.

## [1.3.0] - 2019-04-24
### Changed
- Update the schema of the freebie categories
- Update the data reflecting the newly revised schema
- Change `Category.children` into an array instead of a hashmap
- Sanitize the `Category.children` items' properties
