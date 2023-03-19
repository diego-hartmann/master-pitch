# MasterPitch
Edit audio pitch and create instruments inside your webpage!

Enter [Package NPM page](https://www.npmjs.com/package/master-pitch)

# Install

```yarn add master-pitch``` or ```npm i master-pitch```


# Import
```js
import { loadBuffer, playBuffer } from 'master-pitch';
``` 
 
 # Use
 ```js
// loading
const myAudio = await loadBuffer('../audios/sample.mp3');

// playing with pitch exemples
const default = 60;
const higher = 62;
playBuffer(myAudio, default, higher);
```
