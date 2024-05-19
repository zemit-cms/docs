***

# AbstractServiceProvider

Class AbstractServiceProvider



* Full name: `\Zemit\Provider\AbstractServiceProvider`
* Parent class: [`\Zemit\Di\Injectable`](../Di/Injectable.md)
* This class implements:
[`\Zemit\Provider\ServiceProviderInterface`](./ServiceProviderInterface.md)
* This class is an **Abstract class**



## Properties


### serviceName

The Service name.

```php
protected string $serviceName
```






***

## Methods


### __construct

Set DI and run configure();

```php
public __construct(\Phalcon\Di\DiInterface $di): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$di` | **\Phalcon\Di\DiInterface** |  |





***

### getName

Get the Service name.

```php
public getName(): string
```












***

### boot

Package boot method.

```php
public boot(): void
```












***

### configure

Configures the current service provider.

```php
public configure(): void
```












***


***
