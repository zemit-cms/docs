***

# Module

This class allows to access services in the services container by just only
accessing a public property with the same name of a registered service



* Full name: `\Zemit\Modules\Api\Module`
* Parent class: [`\Zemit\Mvc\Module`](../../Mvc/Module.md)



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

### getNamespaces



```php
public getNamespaces(): array
```












***

### getDefaultNamespace



```php
public getDefaultNamespace(): string
```












***

### getViewsDir



```php
public getViewsDir(): array
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
