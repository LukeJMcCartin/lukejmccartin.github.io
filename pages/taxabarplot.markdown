---
layout: page
title: Taxa Bar Plot shiny app
permalink: /taxabarplot/
---

This app plots the occurence of taxa across samples from environmental DNA or other metabarcoding data. The app expects the data in a .csv file with the following headers, where target refers to the marker gene used to designate primer sets for differential abundance analysis.

"Target,Reads,Phylum,Class,Order,Family,Genus,Species,Volume,Depth,Sample"

All columns are characters except for "Reads" and "Depth"

<iframe src="https://lukemccartin.shinyapps.io/TaxaBarPlot/" 
        style="border: none; width: 100%; height: 800px;" 
        allowfullscreen>
</iframe>