***

# ServiceProvider

Class AbstractServiceProvider



* Full name: `\Zemit\Provider\DatabaseReadOnly\ServiceProvider`
* Parent class: [`\Zemit\Provider\Database\ServiceProvider`](../Database/ServiceProvider.md)



## Properties


### readonly



```php
protected bool $readonly
```






***

### serviceName

The Service name.

```php
protected string $serviceName
```






***



## Inherited methods


### register



```php
public register(\Phalcon\Di\DiInterface $di): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$di` | **\Phalcon\Di\DiInterface** |  |





***

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
