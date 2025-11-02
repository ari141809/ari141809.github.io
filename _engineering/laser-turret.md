---
title: "Gesture-Controlled Laser Turret (Rev 2)"
date: 2025-10-15
status: "Prototype complete"
tools: ["OpenCV", "ESP32", "PID control", "3D-printed gimbal"]
links:
  - { title: "GitHub", url: "https://github.com/" }
  - { title: "Video demo", url: "https://youtu.be/" }
images:
  - /images/laser-turret.jpg
excerpt: "Computer-vision turret using skin segmentation and Kalman smoothing. Second revision adds closed-loop motor control and a safety interlock."
---

## Overview
Short summary of the problem, constraints, and final result.

## Architecture
- ESP32 control loop with PID.
- A4950 H-bridge drivers on custom PCB.
- UART link to host for telemetry.

## Computer Vision
- Denoise → contour → centroid → predictive smoothing.

## Results & Next Steps
- Response time improved 30% after PID tuning.
- Add limit switches & better safety interlock.