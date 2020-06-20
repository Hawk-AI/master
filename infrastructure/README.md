# Hawk AI 

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Repositories

HawkAi's master repository joins other 3 repositories as git subtrees. In order to add a new subtree to the master respitory the following command must be executed: 

```
git subtree add --prefix={local directory being pulled into (subtreeDirectory) } {remote repo URL} {remote branch} 
```
In order to pull commits from a remote repository into the master repository the following command must be executed. Note that the user must have contributer access in order to succesfully pull from private repos. 

```
git subtree pull --prefix={subtreeDirectory} https://github.com/newfivefour/vimrc.git master
```

In order to push changes to a remote repository from the master repository the following command must be executed. Note that the user must have contributer access in order to succesfully push to the remote repo. 

```
git subtree push --prefix={subtreeDirectory} https://github.com/newfivefour/vimrc.git master
```

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
git subtree for Merging multiple repositories
https://www.jvt.me/posts/2018/06/01/git-subtree-monorepo/
HawkAI's cloud infrastructure - automation and CI/CD Pileline :)


# Contributors
* José Alejandro Guzmán Zamora
* Victor Andre Farfán Miranda
* Juan Fernando González
* José Alejandro Madrazo Ávila
