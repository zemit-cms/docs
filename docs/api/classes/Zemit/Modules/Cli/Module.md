***

# Module





* Full name: `\Zemit\Modules\Cli\Module`
* Parent class: [`\Zemit\Cli\Module`](../../Cli/Module.md)



## Properties


### name



```php
public string $name
```






***



## Inherited methods


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
> Automatically generated on 2024-03-28
