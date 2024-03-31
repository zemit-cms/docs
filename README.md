# Zemit CMS Documentation

Welcome to the documentation for Zemit CMS. This documentation project is built using MkDocs and serves as a
comprehensive guide to understanding and utilizing the features provided by Zemit CMS.

## Official Documentation

Visit the [official documentation site](https://docs.zemit.com/) for detailed information, tutorials, and examples on
using Zemit CMS.

## Zemit CMS Website

For more information about Zemit CMS and its features, visit the [official website](https://www.zemit.com/).

## Installation

To build and install the documentation locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/zemit-cms/docs.git
```

Navigate to the project directory:

```bash
cd docs
```

Use the Dockerfile:
```bash
docker build -t zemit-mkdocs .
```

Build the documentation:

```bash
docker run -e CD=true --rm -it -v ${PWD}:/docs zemit-mkdocs build
```

Start a local development server to view the documentation:

```bash
docker run -e CI=true --rm -it -p 8000:8000 -v ${PWD}:/docs zemit-mkdocs
```

Open your web browser and visit http://localhost:8000 to view the documentation.

## Contributing

Contributions to the documentation are welcome! If you would like to contribute, please fork the repository, make your
changes, and submit a pull request. Refer to
the [Contribution Guidelines](https://github.com/zemit-cms/core/blob/master/CONTRIBUTING.md) for more information.

## License

This documentation is licensed under
the [BSD 3-Clause License](https://github.com/zemit-cms/core/blob/master/LICENSE.txt). You are free to use, modify, and
distribute the documentation as per the terms of the license.
