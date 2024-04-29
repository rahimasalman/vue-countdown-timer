#  Countdown Timer Component 

## Playground  
https://codepen.io/rahimasalman/pen/QWPJbLL

## Description
The Countdown Timer component is used to display and manage a countdown timer with customizable total time and initial time left.

## Props
- `totalTime` (Number, default: 30): Specifies the total time for the countdown in seconds.
- `initialTimeLeft` (Number, default: 30): Specifies the initial time left for the countdown in seconds.

## Data
- `remainingTime`: Tracks the remaining time left for the countdown.
- `radius`: Radius of the countdown timer circles.
- `intervalId`: ID of the interval used for the countdown.

## Computed Properties
- `circumference`: Calculates the circumference of the countdown timer circles.
- `circleStyle`: Generates the CSS style for the countdown timer circles based on the remaining time.

## Methods
- `startCountdown`: Initiates the countdown by setting up an interval to decrement `remainingTime` every second until it reaches 0.
- `clearInterval`: Clears the interval used for the countdown.

## Watchers
- `initialTimeLeft`: Updates `remainingTime` when `initialTimeLeft` prop changes.
- `totalTime`: Adjusts `remainingTime` if the new `totalTime` is less than the current `remainingTime`.

## Events
- `completed`: Emits the `completed` event to indicate that the countdown has finished.

## Usage
To use the Countdown Timer component, include it in your Vue template and provide the `totalTime` and `initialTimeLeft` props as needed. You can start the countdown by calling the `startCountdown` method when necessary.



Example usage:

![image](https://github.com/adviad/app/assets/64548507/96bd1165-d3e4-41ca-ac88-ba4b7b93a27e)

