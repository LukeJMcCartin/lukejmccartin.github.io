---
layout: page
title: Bioinformatics Data Analysis Tutorials
permalink: /tutorials/
---

Here, you will find examples of tutorials that I've written to analyze DNA metabarcoding data generated using both Illumina short read and Nanopore long read data. 

These tutorials were designed for upper-level undergraduate courses in molecular ecology and for independent student research projects. They are intended to be part of a larger educational series that introduces the basics of the command line and coding, primarily in the R language. Further, they are intended to be as informative as possible for beginners and thus are rather verbose. 

If you would like to give these tutorials a try on your own data, they depend on a few different bioinformatics packages that must be installed on your local computer. 

<div class="grid-container">

  <div class="grid-item">
    <a href="{{ '/tutorials/illumina_dada2/' | relative_url }}" class="research-link">
      <img src="{{ '/assets/img/sampling_edna.jpg' | relative_url }}" alt="eDNA sampling">
      <span class="research-overlay">
        <span class="research-text">Processing eDNA metabarcoding data generated using Illumina short read sequencing</span>
      </span>
    </a>
  </div>

  <div class="grid-item">
    <a href="{{ '/tutorials/nanopore_natrix' | relative_url }}" class="research-link">
      <img src="{{ '/assets/img/bamboo.png' | relative_url }}" alt="Bamboo coral">
      <span class="research-overlay">
        <span class="research-text">Analyzing coral eukaryome metabarcoding data generated using Oxford Nanopore long read data with Natrix2</span>
      </span>
    </a>
  </div>

</div>