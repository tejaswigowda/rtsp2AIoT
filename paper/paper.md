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



# Advantages

## Low power consumption on the edge

The platform is designed to be highly efficient, with support for running on low-power hardware. This allows the platform to be deployed on edge devices, such as microcontrollers or single-board computers, without requiring additional hardware or resources. The platform is designed to be lightweight, with minimal resource requirements, allowing it to run on a wide range of hardware platforms. This makes the platform ideal for use cases where power consumption is a concern, such as battery-powered devices or devices with limited power sources.

## Real-time video ML inference

The platform is designed to support real-time video ML inference, allowing users to perform ML inference on video streams in real-time. This allows users to detect objects, recognize faces, or perform other ML tasks on live video streams. The platform is designed to be highly scalable, with support for multiple cameras and multiple ML models running in parallel. This allows users to process multiple video streams simultaneously, with each stream running its own ML model. The platform is designed to be highly efficient, with support for running ML models on the edge or in the cloud. This allows users to choose the best deployment option for their specific use case, based on factors such as latency, cost, or resource availability.

## Modular and flexible

The platform is designed to be modular and flexible, allowing users to easily add new ML models, data sources, and data sinks. This allows users to customize the platform to meet their specific needs, without requiring extensive development or integration work. The platform is built using open-source standards and technologies, allowing for easy integration with third-party services and tools. The platform is designed to be open-source, with support for community contributions and third-party integrations. This allows users to extend the platform with new features, such as new ML models, data sources, or data sinks. The platform is designed to be future-proof, with support for new ML models, data sources, and data sinks. This allows users to keep the platform up-to-date with the latest technologies and trends, without requiring extensive development or integration work.

## Scalable and reliable

The platform is designed to be highly scalable, with support for running on a single server or a cluster of servers. This allows users to scale the platform to meet their specific needs, based on factors such as the number of cameras, the number of video streams, or the complexity of the ML models. The platform is designed to be reliable, with support for automatic backups and disaster recovery. This allows users to ensure that their data is safe and secure, even in the event of hardware failure or data loss. The platform is designed to be performant, with support for real-time video ML inference. This allows users to process video streams in real-time, without requiring extensive buffering or latency. The platform is designed to be cost-effective, with support for running on low-cost hardware or cloud servers. This allows users to deploy the platform on a wide range of hardware platforms, without requiring extensive resources or investment.





# Future work


# Acknowledgements

Koen Van Daele and Ronald Visser fueled me with valuable feedback on
earlier versions of the package.

At _rOpenSci_, dr. Antonio J. Pérez-Luque, dr. Nicholas Tierney and dr.
Maëlle Salmon provided an essential and constructive software review,
allowing me to significantly improve the quality of the package.

# References
