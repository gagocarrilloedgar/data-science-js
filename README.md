# Data-sience-js


JS-based library for data-science, statistic and math projects. Currently supporting


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gagocarrilloedgar_data-science-js&metric=alert_status)](https://sonarcloud.io/dashboard?id=gagocarrilloedgar_data-science-js) [![CodeFactor](https://www.codefactor.io/repository/github/gagocarrilloedgar/data-science-js/badge)](https://www.codefactor.io/repository/github/gagocarrilloedgar/data-science-js)

## Install

```shell
    # Install command
    npm i data-science-js
```

## Detailed description

JS-based library for data-science, statistic and math projects. Currently supporting: 

- Mean Square Error: MSE
- F1Score: macro

### Add here functions you'd like to see as js-based

To come:

- F1Score: averaged
- F1Score: with null control exceptions

 
## Usage

Some examples

```javascript
   const {fOneScoreMacro} = requir('data-science-js')  

   const data = [1, 2, 0, 0, 1]
   const data = [1, 2, 1, 0 ,1 ]

   const {f1score, recall,precission} = fOneScoreMacro(target, predicted)
          
```

Currenly avalibale:

- fOneScoreMacro(target [], predicted [])
- average(arr [])
- meanSquareError (predicted [], target [])
- summArray(arr [])

## Contributing 

Simply follow:

1. Clone the repo
2. Create a branch with the name of the feature you want to add
3. Pull to your branch
4. Create a pull request to dev so it can be checked and merged


## Contact info 

You can contact me on LinkedIn

[Edgar Gago Carrillo](https://www.linkedin.com/in/edgargagocarrillo/)

or at:

> edgargc.upc@gmail.com

## Licence 

[MIT](https://opensource.org/licenses/MIT)
