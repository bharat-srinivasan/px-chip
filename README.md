# px-chip

## Overview

A chip is a representation of an object or a series of information. For example, a chip can be used to represent a contact or a filter. Use a chip in order to represent complex information in a compact way.

A chip can include text or an icon.

A chip can be created, removed or toggled.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

## Getting Started

First, install the component via bower on the command line.

```
bower install px-chip --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-chip/px-chip.html"/>
```

Finally, use the component in your application:

```
<px-chip content="Some text here"></px-chip>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://www.predix-ui.com/#/elements/px-chip).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-chip/issues) to submit any bugs you might find.
