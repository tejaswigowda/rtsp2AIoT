---
title: "_ASPEN_: A Scalable AIoT Platform for Network Cameras"
authors:
  - name: Tejaswi Gowda
    orcid: 0000-0002-0896-6526
    affiliation: 2
affiliations:
  - name: Arizona State University
    index: 1
  - name: Foxy Ninja Studios
    index: 2
  
date: "2024-05-24"
tags:
  - AIoT
  - Network cameras
  - rtsp
  - web sockets
  - webrtc
editor_options:
  markdown:
    wrap: 72
bibliography: paper.bib
---

# Summary

_ASPEN_ is a scalable AIoT platform for network cameras that enables real-time video ML inference on either the edge or cloud servers. The platform is designed to be modular and flexible, allowing users to easily add new ML models, data sources, and data sinks. The platform is built using a microservices architecture, with each service responsible for a specific task, such as video streaming, ML inference, or data storage. The platform supports a wide range of network cameras, including RTSP cameras, USB cameras, and IP cameras. The platform also supports a variety of ML models, including object detection, facial recognition, and license plate recognition. The platform is designed to be highly scalable, with support for multiple cameras and multiple ML models running in parallel. 

The platform is built using open-source standards and technologies, including web sockets, webrtc. The open source nature of this platform allows for easy integration with third-party services and tools. There is glue code for integrating this into AWS Kinesis WebRTC signalling channels, but this can be easily adapted to other cloud providers. 

The platform is designed to be open-source, with support for community contributions and third-party integrations. The platform is designed to be future-proof, with support for new ML models, data sources, and data sinks. The platform is designed to be reliable, with support for automatic backups and disaster recovery. The platform is designed to be performant, with support for real-time video ML inference. The platform is designed to be scalable, with support for running on a single server or a cluster of servers. The platform is designed to be flexible, with support for running on-premises or in the cloud. The platform is designed to be cost-effective, with support for running on low-cost hardware or cloud servers. 



# Statement of need

There are a plethora of network cameras available in the market today, ranging from simple USB cameras to high-end IP cameras. These cameras are used for a variety of applications, including security, surveillance, and monitoring. However, most of these cameras are limited in their capabilities, with little to no support for ML inference. Also these cameras are not designed to work in concernt with other cameras, or to be easily integrated into a larger system. The package resolves this issue by a simple light-weight npm package that can be installed on any hardware on the edge (from low-power microcontrollers to high-end servers) and can be easily integrated into a larger netwroked system. 

Companies and organizations that use network cameras often have a need for real-time video ML inference, but they lack the expertise or resources to build their own ML models or ML inference pipelines. The package provides a simple and easy-to-use platform that allows users to easily add new ML models, data sources, and data sinks. The package is designed to be modular and flexible, allowing users to easily customize the platform to meet their specific needs. 


# Architecture

The platform is built using a microservices architecture, with each service responsible for a specific task. The platform consists of the following services:

1. rtsp2WebSocket: This service is responsible for converting RTSP video streams to web socket streams. This service uses the ffmpeg library to convert the video streams. The service is designed to be highly scalable, with support for multiple cameras and multiple video streams running in parallel. We use the `node-rtsp-stream` npm package to convert the RTSP stream to a web socket stream. using ffmpeg or vlc every frame is converted to a jpeg image and sent over  web socket. This web socket server can be any server that supports web sockets, including node.js, python. We provide a simple example of a web socket server that can aggregate multiple streams from multiple cameras and web socket it to a single or multiple servers. Once the video stream is converted to a web socket stream, it can be easily consumed by other services, such as the ML inference service, webRTC service, or data storage service.


We discuss a simple example of a web socket server that can aggregate multiple streams from multiple cameras and web socket it to a single or multiple servers. 



# Usage



# Use cases




# Future work

In its current version, the package `fellingdater` is tailored to the
general workflow for analyzing tree-ring datasets from wooden cultural
heritage objects and constructions, made of European oak (*Quercus*
sp.). The sapwood data included in the current version reflect this
focus on oak. However, all functions can also work with a custom sapwood
dataset provided as a `data.frame`. As such, sapwood data from other
regions and wood species can also be explored, modeled and used to
determine felling dates.

# Acknowledgements

Koen Van Daele and Ronald Visser fueled me with valuable feedback on
earlier versions of the package.

At _rOpenSci_, dr. Antonio J. Pérez-Luque, dr. Nicholas Tierney and dr.
Maëlle Salmon provided an essential and constructive software review,
allowing me to significantly improve the quality of the package.

# References
