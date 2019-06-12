Gas Mileage Calculator (Client)
===============================
Introduction
------------
When my father passed away, I inherited his 2002 Ford F-150 pickup truck. It's a
beast, with a 5.4L V8 engine. It sucks gas. A LOT of gas. But, I've never been
able to accurately calculate how much I'm spending nor what the effective gas
mileage is without some effort. This app is designed to remedy that.

It's a running gas mileage calculator. The user enters in their odometer reading,
the amount of gas they purchased at their last fill up, and, optionally, the amount of the purchase. The app then calculates the average mileage and average cost, per gallon.

This is my second project here at General Assembly.

##### What It Does
This application calculates a running average of the mileage for a given user. For every trip to the gas station, simply record the date, your odometer reading on that date, the amount of gas you purchased, and what you paid for it. Over the course of time, the MPG (miles per gallon) and PPG (price per gallon) should be a fairly accurate average of the mileage your vehicle gets on a regular basis.

As it's a running total, you can add older entries, as well. If the data that you enter is correct, then those once forgotten entries will only act to make your average MPG and PPG calculations more accurate.

##### What To Expect
* For calculations to begin, you need at least two entries. The reason for this is that, even after the first entry, there is no effective distance driven. (Did you drive 500 miles before the first entry or 5000 miles? How much gas did you actually purchase before the first entry?)

* The Total Fuel amount reflects what has been purchased _in total_, whereas the MPG and PPG calculations do _not_ take the fuel for the most recent entry into account, as there's no way of knowing how far you will drive on your _current_ tank of gas until you add yet another entry.

* For any given new entry with a given date, the odometer reading is compared to the previous and next entries to ensure better data consistency. If for example, you have an entry on 3/1/2019 with 10000 miles and another entry on 4/1/2019 with 11000 miles, you cannot add an entry on 3/15/2019 with an odometer reading less than 10000 or greater than 11000.

For notes about the Back End, please see the README [here](https://github.com/gbbenson68/gas-mileage-calculator-back-end).

The client is deployed on GitHub Pages and can be found [here](https://gbbenson68.github.io/gas-mileage-calculator-client/).

Technologies Used
-----------------
The web application client was written with the help of and utilizing the following technologies:
* HTML
* JavaScript
* jQuery
* Handlebars
* CSS
* SASS/Bootstrap
* Node.js
* git/GitHub
* Atom
* All colors were derived with the help of https://www.quackit.com/css/css_color_codes.cfm.
* Hosted by GitHub Pages.

_This application was developed on Ubuntu 18.04.2 LTS. No Microsoft developers were harmed during the making of this application._

Development and Planning
------------------------
In contrast to my first GA project, this one went more smoothly, as I had a better idea of what had to happen. I knew that I wanted to get the back end out of the way first, as the front end can't happen without a back end to test against. So, the first day of the project was devoted entirely to the back end. As I have a database background, the construction of the READINGS resource in Rails was fairly straightforward. Once the resource was created, only two minor updates were made: a) addition of the (forgotten) fuel_amount and fuel_units fields, and b) the changing of the fuel_amount from an integer to a floating point value.

As with the first project, the vast majority of time was spent on the front end. I extended one of the ideas that I had on my first project (perhaps a bit too much?) in including references to the HTML  (IDs, classes, etc.) in the ```config.js``` file, and then use references to those items in the JS code itself. That way, if I ever needed to make changes to the references in the HTML, I would only need to change the appropriate ```config.js``` entry to preserve functionality.

I did, perhaps, go a little "button happy," which required a bit of acrobatics with the event listeners and handlers, but I'm pleased with the result. I will try to find a simpler way to do the same thing the next time around, though.

Speaking of event listeners and handlers... I also had to perform some acrobatics to make sure that the update and delete buttons for the individual entries was working correctly. Having said that, the use of Handlebars templates and helpers themselves was fairly straightforward, however. In general, I find Handlebars to be very useful!

#### Data Validation
Most of the data is validated by the HTML, so that no crap data can be entered. The odometer reading must be a _number_ and have a minimum of _0_ (thereby making it an integer). The fuel quantity must be a _number_, have a minimum of _0_ and a step of _0.1_ (thereby making it a float of one decimal place) and, lastly, the price must be a _number_, have a minimum of _0_ and a step of _0.01_ (thereby making it a float of two decimal places).

Since the price is an optional field, I've put a helper function in place such that, if no value is specified, a value of _0.00_ is displayed upon retrieval.

#### A Quick Aside About the Color Theme
My wife, Barbara, kept on asking me "Can you make it pink and purple?" on my last project, so I decided to indulge her on this project. 😉

Wireframes
----------
The wireframe for this is kinda simple, as is the application.

![Imgur](https://i.imgur.com/9GnO4oY.jpg)

User Stories
------------
Must haves:

1. As an user, I want to enter the amount and cost of the gas I purchased for a given odometer reading.
2. As a user, I want to update errant entries.
3. As a user, I want to delete entries that I no longer want to use.
4. As a user, I want to see my average mileage and cost spent on gas.
5. As a user, I want enter in the date the reading was taken.
6. As a user, I want to be able to change the amount and comment any time I want.

Nice to haves/wish list:

1. As a user, I want to have the option of using US Imperial (miles, gallons) or Metric (kilometer, liter) units.
2. As a user, I want to be able to have different profiles for different cars.
3. As a user, I want to see a plot of my average mileage over time.
4. As a user, I want to see a plot of my average cost over time.

Basic Directory Structure
-------------------------
Unlike my last project, I tried to segregate the code into separate _authentication_ and _calculator_ groups. There is still some overlap, however. It would be nice to be able to create a separate internal interface so as to be able to keep the sections interact via the interface, rather than reference other sections directly.

```
assets/images
```
This directory contains the wireframe image, as well as a public image that I have been trying to use for an animation, but for which I haven't yet been successful.

```
assets/scripts
```
This is where the _JavaScript Magic_ happens. All the application-specific JavaScript resides here.

The general shared JS scripts are listed below:

* ```app.js``` - the top-level JS file that interacts with the HTML

* ```config.js``` - the configuration file which contains configuration variables

* ```store.js``` - holds and stores the current user information

* ```util.js``` - library of utility functions


```
assets/scripts/auth
```
This sub-directory contains the JS code specific to _authentication_.

* ```api.js``` - contains the AJAX requests used for user authentication

* ```events.js``` - contains the event listeners and handlers related to authentication

* ```ui.js``` - contains the user-related DOM updates to the UI

```
assets/scripts/calculator
```
This sub-directory contains the JS code specific to the _calculator_.

* ```api.js``` - contains the AJAX requests used for accessing the READINGS resource

* ```calc.js``` - the calculator code itself

* ```events.js``` - contains the event listeners and handlers related to mileage calculation functionality

* ```ui.js``` - contains the calculator-related DOM updates to the UI

```
assets/scripts/templates
```
This sub-directory contains the Handlebars add-ons.

 * ```readings_listing.handlebars``` - contains the template for rendering the individual detail entries

```
assets/scripts/templates/helpers
```
* ```formatFloat.js``` - a helper function used to format and return a formatted string used by the Handlebars template to render details

* ```limit.js``` - a helper used to limit the length of a string

```
assets/styles
```
* ```colors.scss``` - the swath of colors and color palattes that I use in (and discovered while developing) this application

* ```index.scss``` - the main list of SCSS files used, in the order they are to be utilized

* ```theme.scss``` - contains the themes for the application, not including font details

* ```typography.scss``` - contains the font styles

```
curl-scripts/auth
```
_All of the scripts listed here are copies of those used by the back end, and were included with the client for completeness._

* ```change-password.sh``` - used to test the change password interface (PATCH)

* ```sign-in.sh``` - used to test the sign-in (POST) interface

* ```sign-out.sh``` - used to test the sign-out (DELETE) interface

* ```sign-up.sh``` - used to test the sign-up (POST) interface

```
curl-scripts/readings
```
_All of the scripts listed here are copies of those used by the back end, and were included with the client for completeness._

* ```create_reading.sh``` - used to test the creation of a READINGS entry (POST)

* ```delete_reading.sh``` - used to test the deletion of a READING entry (DELETE)

* ```index_readings.sh``` - used to to test the retrieval of entries of a given user (GET)

* ```show_reading.sh``` - used to to test the retrieval of a given entry (GET)

* ```update_reading.sh``` - used to test the update of a given entry (PATCH)

Known Bugs and To-dos
---------------------
_Feel free to contact me at guy dot b dot benson at gmail dot com if you've found a bug, or have a suggestion about functionality. Please include an appropriate subject so I don't think that it's spam!_

#### Known Bugs
* Although not a bug, per se, the code could by a little DRYer.

#### To-Dos
* My CSS/Sass/Bootstrap skills are still in the toddler stage, so the UI is based on my (as yet) limited knowledge.

* It would be nice to have a modal that said "Are you sure?" or somesuch when clicking the delete entry button.

* I wanted to include an animation in the header, but I have not been able to get that working, as yet.

* I18N and L10N: The current model contains the ability to store different values (liters vs. gallons, kilometers vs. miles, etc.). The front-end is currently hard-coded to Imperial units, as exposing these fields would require the proper checking to ensure that all entries fit a certain profile (see below).

* I have plans to extend the functionality to include user profiles, which would be used by multi-vehicle entities, and which could be locale-specific (liters/kilometers/euros, for example). This would also require extensive changes to the client to allow for this functionality.

* For further details about the resources to be used in the future, please see the documentation for the back end [here](https://github.com/gbbenson68/gas-mileage-calculator-back-end#known-bugs-and-to-dos).

* _Please check the experimental branch for the latest goings-on!_

About Me
--------
I am an aerospace engineer by education and a software engineer by experience. I’ve always been intrigued by using software to solve practical problems, whether it be something as simple as providing an HTML interface for viewing invoices or something as complex as modeling the fluid flow through a rocket thruster. I recently decided to upgrade my skill set with an immersive software engineering program at General Assembly, and I am now taking my ambitions to the next level. I am eager and excited to take on those sometimes seemingly unsurmountable challenges regarding major problems that affect all of our society, and am especially interested in those problems affecting the underprivileged.
