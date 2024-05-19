***

# Module





* Full name: `\Zemit\Cli\Module`
* This class implements:
[`\Phalcon\Mvc\ModuleDefinitionInterface`](https://docs.phalcon.io/latest/api/){:target="_blank"}


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`NAME_CLI`|public| |'cli'|

## Properties


### name



```php
public string $name
```






***

### config



```php
public ?\Zemit\Bootstrap\Config $config
```






***

### dispatcher



```php
public ?\Zemit\Cli\Dispatcher $dispatcher
```






***

### loader



```php
public ?\Phalcon\Autoload\Loader $loader
```






***

### router



```php
public ?\Zemit\Cli\Router $router
```






***

## Methods


### registerAutoloaders

Registers an autoloader related to the frontend module

```php
public registerAutoloaders(\Phalcon\Di\DiInterface $container = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$container` | **\Phalcon\Di\DiInterface** |  |





***

### registerServices

Registers services related to the module

```php
public registerServices(\Phalcon\Di\DiInterface $container): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$container` | **\Phalcon\Di\DiInterface** |  |





***

### getNamespaces



```php
public getNamespaces(): array
```












***

### getServices



```php
public getServices(\Phalcon\Di\DiInterface $container = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$container` | **\Phalcon\Di\DiInterface** |  |





***

### setServices



```php
public setServices(\Phalcon\Di\DiInterface $container): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$container` | **\Phalcon\Di\DiInterface** |  |





***

### getDefaultNamespace



```php
public getDefaultNamespace(): string
```












***

### getDirname



```php
public getDirname(): string
```












***

### getNamespace



```php
public getNamespace(): string
```












***


***
