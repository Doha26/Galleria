<p align="center">
    <img width="90" height="90" src="https://i.ibb.co/7WTBVy4/icon.jpg">
</p>


# Galleria

>A React Native mobile application that display infinite scroll of images with fast loading,  
> and caching mechanism.   
> Since this app behave like a Gallery image app, I decided to call it `Galleria`.
 
 ## Results
- [x] Splashscreen
- [x] Intro screen
- [x] Infinite Scrollable Masonry List displaying images in the home screen
- [x] Display option for image item on click (See in Fullscreen , Share on social media , Save to phone gallery)
- [x] Fast image loading
- [x] Cache for images
- [x] Cache for Request
- [x] Expo setup with Bare-workflow
- [x] Working on iPhone and Android Devices (Tested)
- [x] Fixed known bug for images display in iOS 14. bug reference [here]()
- [x] Documentation
- [x] Implemented some Units and snapshot tests to ensure that app behave as expected (Work In Progress)


##  Preview
![App-demo](./app/src/demo/demo1.png)

### Used

 - [React Native (with Hooks)](https://reactnative.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Expo + Bare workflow](https://docs.expo.io/bare/exploring-bare-workflow/)
 - [React Navigation](https://reactnavigation.org/)
 - [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/)
  - Others (See package.json at the root folder)

 ## Get Started
 
 #### 1. Clone the Repo
 
 On the command prompt run the following commands
 ```sh
 $ git clone https://github.com/Doha26/Galleria.git
 
  $ cd Galleria
  
  $ yarn  OR npm install (if you are using npm )

  $ grep -rl "s.dependency 'React/Core'" node_modules/ | xargs sed -i '' 's=React/Core=React-Core=g' // To replace React/Core with React-core for all dependencies that use it
 
  $ react-native link
  
  $ cd ios && pod install && cd.. (For iOS build)
  
  $ react-native run-ios  OR  react-native run-android

 ```

  ## Dev environment
  - System:
      - OS: macOS 10.15.6
      - CPU: (8) x64 Intel(R) Core(TM) i7-4980HQ CPU @ 2.80GHz
      - Memory: 974.53 MB / 16.00 GB
      - Shell: 5.7.1 - /bin/zsh
  - Binaries:
      - Node: 12.18.3 
      - Yarn: 1.17.3 
      - npm: 6.14.6
      - Watchman: 4.9.0
  - SDKs:
      - iOS SDK:
      - Platforms: iOS 13.7, DriverKit 19.0, macOS 10.15, tvOS 13.4, watchOS 6.2
  - IDEs:
      - Android Studio: 4.0 AI-193.6911.18.40.6626763
      - Xcode: 11.7/11E801a


 ### Author

*  [Pavel Foujeu](mailto:foujeupavel@gmail.com)  
   [![Linkedin: pavel-foujeu-8a8992142](https://img.shields.io/badge/-Pavel%20Foujeu%20-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pavel-foujeu-8a8992142/)](https://www.linkedin.com/in/pavel-foujeu-8a8992142/)
   [![GitHub Doha26](https://img.shields.io/github/followers/Doha26?label=follow&style=social)](https://github.com/Doha26)


 
 ### Done with React-native
 *	[Instagram Clone ](https://github.com/Doha26/Instagram-clone)
 *	[MetFlix](https://github.com/Doha26/MetFlix)

