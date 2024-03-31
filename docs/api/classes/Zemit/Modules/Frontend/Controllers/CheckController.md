***

# CheckController

Class Controller



* Full name: `\Zemit\Modules\Frontend\Controllers\CheckController`
* Parent class: [`\Zemit\Modules\Frontend\Controllers\AbstractController`](./AbstractController.md)



## Properties


### versionList



```php
public array $versionList
```






***

### phpExtensionList



```php
public array $phpExtensionList
```






***

### serviceList



```php
public string[] $serviceList
```






***

## Methods


### getVersionList



```php
public getVersionList(): array|string[]
```












***

### getPhpExtensionList



```php
public getPhpExtensionList(): array|string[]
```












***

### getServiceList



```php
public getServiceList(): array|string[]
```












***

### pingAction

Return the pong response to a ping request

```php
public pingAction(): string
```












***

### requirementsAction

Compatibility and requirements checks

```php
public requirementsAction(): mixed
```












***

### phpinfoAction



```php
public phpinfoAction(): void
```












***

### extensionsAction



```php
public extensionsAction(): void
```












***

### cacheAction



```php
public cacheAction(): void
```












***


## Inherited methods


### initialize



```php
public initialize(): mixed
```












***


***
> Automatically generated on 2024-03-28
