# Polis Interview Take-home Project

##### Table of Contents

  * [Overview](#overview)
  * [Getting Started](#getting-started)
  * [Instructions](#instructions)
  * [Supported Functionality](#supported-functionality)
  * [Approaches](#approaches)
  * [Help](#help)

## Overview

There are two problems provided, `arithmatic-problem-solver` and `power-problem-solver`. Each project is found in their respective directories under `/lib`. 

The `arithmatic-problem-solver` is compulsory, however the `power-problem-solver` is optional. 


## Getting Started

This project has several dependencies that must be installed before beginning, which include:

  * [Node.js](https://nodejs.org)
  * [NPM](https://www.npmjs.com)
  * [Mocha.js](https://mochajs.org/)
  * [Istanbul](https://istanbul.js.org/)

#### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.  It ships with an HTTP server framework for building highly scaleable web APIs.  It is the platform on which this project is designed to run.  To install visit the [Download Node.js](https://nodejs.org/en/download/) page, and download/install the latest LTS version.

Node.js was originally built to run on -nix baed systems.  If you're running Windows, that's fine, but we recommend setting up a Linux virtual machine, and using your editor of choice (such as [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/))) — it will make your life easier.

You can validate your install by running (from the Terminal):

```sh
$ node -v
```

#### NPM

NPM is the Node.js Package Manager.  This utility should have installed with Node.js.  You can validate its installation by running:

```sh
$ npm -v
```

If NPM is not installed, the easiest way to remedy the problem is to use a package manager, such as, [Homebrew](http://brew.sh/) (on macOS), [Apt](https://wiki.debian.org/Apt) (on Debian distributions), [Yum](http://yum.baseurl.org/) (on CentOS distributions), or [Chocolatey](https://chocolatey.org/) (on Windows).

#### Mocha.js

Mocha.js is a test running for Node.js.  You will need to install this package globally to take advantage of the unit tests we've provided for you.

```sh
$ sudo npm install -g mocha
```

#### Istanbul

Istanbul is a code coverage utility, and provides insights on code paths that may not be covered by unit tests.  This utility, like Mocha.js, must be installed globally.

```sh
$ sudo npm install -g istanbul
```

#### Project Dependencies

Finally, you'll need to install the remainder of the project's dependencies.  To begin `cd` into the project directory, and tell NPM to install all of the project's dependencies (as sepcified in `package.json`).

```sh
$ npm install
```

## Help

If at any time you get stuck, have questions about requirements, or have issues installing the prerequisites, please do not hesitate to reach out.  Ultimately, Polis want you to succeed.  If you have any questions, you can contact me any time via email at __ndaba@polisapp.com__.
Cheers,

__Ndaba Ndebele__, _Software Engineer, Polis_

