***

# ServiceProvider

Class AbstractServiceProvider



* Full name: `\Zemit\Provider\Debug\ServiceProvider`
* Parent class: [`\Zemit\Provider\AbstractServiceProvider`](../AbstractServiceProvider.md)



## Properties


### serviceName

The Service name.

```php
protected string $serviceName
```






***

## Methods


### register



```php
public register(\Phalcon\Di\DiInterface $di): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$di` | **\Phalcon\Di\DiInterface** |  |





***

### causeCyclicError



```php
public causeCyclicError(): bool
```












***


## Inherited methods


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
> Automatically generated on 2024-03-28
