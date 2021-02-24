# Lockdown Buster - Approved
## Problem Statement
Covid has caused goverment action to mandate lockdowns and limit the area of travel a person can go. This has caused many businesses to struggle and even shut down during this period of time since much of their customer base is at home. Having an application that predicts the safeness of an area can provide users can help bring customers back to businesses that reside in that area. 

## Abstract
Currently, Covid vaccines are a top priority in helping the world get back into normal shape. Using machine learning, we can predict the likelihood of an area lifting lockdown restrictions based on the percentage of people being vaccinated in that area and other factors within our dataset. Our dataset provides raw data such as zip code, vaccination rate, population in a certain zip code, amount of vaccinations distributed by date, etc. Through this, we can provide statistical analysis, generating different reports and graphs to approach this issue. These different statistics will provide insights on whether a particular area is safe or not. The machine learning model will analyze these factors and break down the safety rating of an area into different tiers. Users will be able to see these different tiers on a web interface.

## Approach
- Take the dataset inputs (zip code, population size per zip code, date, vaccines distributed, etc) and filter the raw data to parse important data points.
- Import the important data points to train and test our machine learning model.
- The machine learning model will output a prediction of how safe the area is for lifting lockdown restrictions.
- Store the information given by the machine learning model in a database and call later.
- Create web interface to take inputs and display information to users about how safe the area is for lifting lockdown restrictions.

## Persona
- This project is catered towards governments for providing info on the liklihood of when lockdowns should be imposed or lifted.
- This project provide information to individuals on how safe an area is.

## Dataset Links
https://healthdata.gov/dataset/covid-19-vaccinations-zip-code
https://data.sccgov.org/COVID-19/COVID-19-vaccinations-among-county-residents-by-da/s4w2-n2ht
https://data.sccgov.org/COVID-19/COVID-19-vaccinations-among-county-residents-by-ag/rfme-d4cs
