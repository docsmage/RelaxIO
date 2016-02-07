// App.js

// Instantiates relaxio module
// configures state, router, controllers

// MainController.js

// MainController.js
// Controls all functionality related to loading, playing/pausing, & visually depicting sounds - currently the only activity on the page

// SoundService.js

// Required functionality for the sounds:

// loadSound: function for loading sounds

// playOrPause: function for playing/pausing sounds and also tracking sound activity to update objects

// - toggleplay switches between play and pause
// - if sound is not in masterPausePlay yet	& if sound file is currently playing, add it to masterPausePlay
// - else if sound IS in masterPausePlay & is currently paused, remove it from masterPausePlay
// - else sound IS in masterPausePlay & is currently playing, or if sound IS NOT in masterPausePlay and is currently paused, exit the function

// pauseAll: intended to pause all sounds

// playAll: intended to play all sounds

// allPaused: return true if all sounds are paused (not working, and I don't think I acutally need it)

// isPlayingSound: return true if the sound is currently playing

// What I NEED TO FIX: instead of detecting which sounds are paused, I need to detect which sounds are currently playing and hold onto those for when the master paused is pressed.