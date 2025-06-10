---
title: "Introducción a los Controladores PID"
description: "Aprende los fundamentos de los controladores PID y su sintonización."
pubDate: "2025-06-07" # Formato de fecha localizado para Chile
lang: es
---

A PID controller is a control loop feedback mechanism widely used in industrial control systems.

## What is a PID controller?

A PID controller calculates an error value as the difference between a desired setpoint and a measured process variable.

- **P**: Proportional
- **I**: Integral
- **D**: Derivative

## Practical tuning tips

1. Start with only the proportional term.
2. Add integral to eliminate steady-state error.
3. Add derivative to reduce overshoot.

> Experiment and observe the system response for best results.

## Video Example


<div class="video-responsive">
  <iframe
    src="https://www.youtube.com/embed/oXGegwLtGuA?si=qyXn5ZazvfhQB1Qn"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Code Example

```python
import time 
import numpy as np
class PIDController:
    def __init__(self, Kp, Ki, Kd, setpoint):
        self.Kp = Kp
        self.Ki = Ki
        self.Kd = Kd
        self.setpoint = setpoint
        self.prev_error = 0
        self.integral = 0

    def update(self, measured_value):
        error = self.setpoint - measured_value
        self.integral += error * time_step
        derivative = (error - self.prev_error) / time_step
        
        output = (self.Kp * error) + (self.Ki * self.integral) + (self.Kd * derivative)
        
        self.prev_error = error
        return output
time_step = 0.1  # Example time step
pid = PIDController(Kp=1.0, Ki=0.1, Kd=0.05, setpoint=10)
while True:
    measured_value = np.random.uniform(0, 20)  # Simulated process variable
    control_signal = pid.update(measured_value)
    print(f"Control Signal: {control_signal}, Measured Value: {measured_value}")
    time.sleep(time_step)
```
