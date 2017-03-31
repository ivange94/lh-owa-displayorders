# LibreHealth OWA Display Orders
Web component that displays radiology orders. This is implemented as an Open Web App

# Setup

To setup you'll need to build from source.

## Prerequisits

* git
* bower
* java

NOTE: Make sure your toolkit installation has the radiology module installed. This app displays radiology orders not all orders. 

## Steps

1. Clone the repository

` git clone https://github.com/ivange94/lh-owa-displayorders.git `

2. Install dependencies

` cd lh-owa-displayorders `

` bower install `

3. Package

` jar -cf lh-owa-displayorders.zip `

4. Upload to your toolkit server and navigate to

` http://localhost:8080/lh-toolkit/owa/lh-owa-displayorders/index.html `

Note: the link depends on the name of your zip package. Here I tell you to navigate to http://localhost:8080/lh-toolkit/owa/lh-owa-displayorders/index.html but on my screenshot you'll see http://localhost:8080/lh-toolkit/owa/orders/index.html this is because when testing this app locally, I named my zip file orders.zip

You should see something like

![alt tag](http://picpaste.com/pics/Screen_Shot_2017-03-31_at_3.39.12_PM-W7uLhlGE.1490971189.png)

The styling is not the best. This app is still under development and I welcome every contribution to make it better.
