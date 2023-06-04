# cypress-tw
This is repository to work on ThoughtWork QA Assignment


# Automation FW Architecture
![image](https://github.com/nhantrantrong/cypress-tw/assets/64664332/15a0ed11-f7c1-4ed4-a2f9-11de9991bc22)


-	support: Location of core and business common methods
o	core: Definition of classes to store wrapped up cy build in method which relating much more on the framework and elements handling
o	mar-airlines: Definition of classes to store common methods which describe a business flow basing on domain knowledge of a specified project
-	configuration: Store configuration for cypress and test run. We can define specPattern, timeout, environment variables, etc. in cypress.config.js file
-	fixtures: Resources location. Test Data files, JSON Schemas, upload images, downloads, etc. would be store in this folder
-	e2e:
o	features: Test feature files location.
o	step-definitions: Step Definition classes location.
o	TestController: The TestController.js class would be used to initialize the class instances
-	report: Location for the generated xml and html report


# Structure in VSCode Editor

![image](https://github.com/nhantrantrong/cypress-tw/assets/64664332/19227ed0-7f63-471e-ba76-f628828b0358)

 
# Prerequisite

-	Install [NodeJS-v14.17.3](https://nodejs.org/dist/v14.17.3/)

<img width="444" alt="image" src="https://github.com/nhantrantrong/cypress-tw/assets/64664332/2d45b17d-7785-4046-85e2-5dcfa60beb6e">

-	 Install [allure-commandline](https://www.npmjs.com/package/allure-commandline)

<img width="512" alt="image" src="https://github.com/nhantrantrong/cypress-tw/assets/64664332/19cd11f7-2e95-4051-b23f-b1bb53ede56d">


-	Clone source code to your local


-	Install dependencies for automation framework

```
npm run reinstall
```


# Test Scenario


### UI

![image](https://github.com/nhantrantrong/cypress-tw/assets/64664332/bea544fc-11fb-4724-9f49-9f4dc3baecd6)
 

# Execute Test


### UI

-	To run ui tests only, please use following command

```npm run cy:test-ui```

<img width="917" alt="image" src="https://github.com/nhantrantrong/cypress-tw/assets/64664332/fc4e92f2-0c3d-4cbf-ab8a-bc60da119470">


# Report

-	To generate allure report, please use following command

```npm run allure:report```

<img width="922" alt="image" src="https://github.com/nhantrantrong/cypress-tw/assets/64664332/9083eca2-67ae-47ce-89be-25c4c3704dee">

![image](https://github.com/nhantrantrong/cypress-tw/assets/64664332/013b0a20-2983-4129-9662-7cc24dfd7cc4)



