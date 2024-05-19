***

# Router

{@inheritDoc}



* Full name: `\Zemit\Mvc\Router`
* Parent class: [`Router`](https://docs.phalcon.io/latest/api/){:target="_blank"}
* This class implements:
[`\Zemit\Router\RouterInterface`](../Router/RouterInterface.md)



## Properties


### config



```php
public \Zemit\Config\ConfigInterface $config
```






***

## Methods


### getConfig



```php
public getConfig(): \Zemit\Config\ConfigInterface
```












***

### setConfig



```php
public setConfig(\Zemit\Config\ConfigInterface $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$config` | **\Zemit\Config\ConfigInterface** |  |





***

### __construct

Router constructor.

```php
public __construct(bool $defaultRoutes = true, ?\Zemit\Config\ConfigInterface $config = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$defaultRoutes` | **bool** |  |
| `$config` | **?\Zemit\Config\ConfigInterface** |  |





***

### defaultRoutes

Default routes
- Default namespace
- Default controller
- Default action
- Default notFound

```php
public defaultRoutes(): void
```












***

### hostnamesRoutes



```php
public hostnamesRoutes(array|null $hostnames = null, array|null $defaults = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$hostnames` | **array|null** |  |
| `$defaults` | **array|null** |  |





***

### modulesRoutes

Defines our frontend routes
/controller/action/params

```php
public modulesRoutes(\Phalcon\Mvc\Application $application, array $defaults = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$application` | **\Phalcon\Mvc\Application** |  |
| `$defaults` | **array** |  |





***

### toArray



```php
public toArray(): array
```












***


***
