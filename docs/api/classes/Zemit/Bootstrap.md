***

# Bootstrap

Zemit Core's Bootstrap for the MVC Application & CLI Console mode



* Full name: `\Zemit\Bootstrap`


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`MODE_CLI`|public| |'cli'|
|`MODE_MVC`|public| |'mvc'|
|`MODE_DEFAULT`|public| |self::MODE_MVC|
|`MODE_CONSOLE`|public| |self::MODE_CLI|

## Properties


### mode



```php
public string $mode
```






***

### args



```php
public ?array $args
```






***

### di



```php
public \Phalcon\Di\DiInterface $di
```






***

### config



```php
public ?\Zemit\Config\ConfigInterface $config
```






***

### router



```php
public ?\Zemit\Router\RouterInterface $router
```






***

### response



```php
public ?\Phalcon\Http\ResponseInterface $response
```






***

### cliDoc



```php
public string $cliDoc
```






***

## Methods


### __construct



```php
public __construct(string $mode = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$mode` | **string** |  |




**Throws:**

- [`Exception`](./Exception.md)



***

### initialize

Initialisation

```php
public initialize(): void
```












***

### setDI

Set the default DI

```php
public setDI(?\Phalcon\Di\DiInterface $di = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$di` | **?\Phalcon\Di\DiInterface** |  |





***

### setMode



```php
public setMode(?string $mode = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$mode` | **?string** |  |





***

### getMode



```php
public getMode(): string
```












***

### getDI

Get the default DI

```php
public getDI(): \Phalcon\Di\DiInterface
```












***

### setConfig

Set the Config

```php
public setConfig(\Zemit\Config\ConfigInterface $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$config` | **\Zemit\Config\ConfigInterface** |  |





***

### getConfig

Get the Config

```php
public getConfig(): \Zemit\Config\ConfigInterface
```












***

### setRouter

Set the MVC or CLI Router

```php
public setRouter(\Zemit\Router\RouterInterface $router): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$router` | **\Zemit\Router\RouterInterface** |  |





***

### getRouter

Get the MVC or CLI Router

```php
public getRouter(): ?\Zemit\Router\RouterInterface
```












***

### registerConfig

Register Config

```php
public registerConfig(): void
```












***

### registerServices

Register Service Providers

```php
public registerServices(?array $providers = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$providers` | **?array** |  |




**Throws:**

- [`Exception`](./Exception.md)



***

### registerRouter

Register Router

```php
public registerRouter(): void
```












***

### bootServices

Boot Service Providers

```php
public bootServices(): void
```












***

### registerModules

Register modules

```php
public registerModules(\Phalcon\Application\AbstractApplication $application = null, ?array $modules = null, ?string $defaultModule = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$application` | **\Phalcon\Application\AbstractApplication** |  |
| `$modules` | **?array** |  |
| `$defaultModule` | **?string** |  |





***

### run

Handle cli or mvc application

```php
public run(): ?string
```











**Throws:**

- [`Exception`](../Exception.md)



***

### handleConsole

Handle Console (For CLI only)

```php
public handleConsole(\Zemit\Cli\Console $console): ?string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$console` | **\Zemit\Cli\Console** |  |





***

### handleApplication

Handle Application

```php
public handleApplication(\Zemit\Mvc\Application $application): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$application` | **\Zemit\Mvc\Application** |  |




**Throws:**

- [`Exception`](../Exception.md)



***

### getArgs

Get & format args from the $this->args property

```php
public getArgs(): array
```












***

### isCli

Return true if the bootstrap mode is set to 'cli'

```php
public isCli(): bool
```












***

### isMvc

Return true if the bootstrap mode is set to 'mvc'

```php
public isMvc(): bool
```












***

### isConsole

Alias for the ->isCli() method

```php
public isConsole(): bool
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.







***

### isDefault

Alias for the ->isMvc() method

```php
public isDefault(): bool
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.







***


## Inherited methods


### setEventsManager

Set the events manager

```php
public setEventsManager(\Phalcon\Events\ManagerInterface $manager): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$manager` | **\Phalcon\Events\ManagerInterface** |  |





***

### getEventsManager

Get the events manager.

```php
public getEventsManager(): ?\Phalcon\Events\ManagerInterface
```












***

### getEventsPrefix

Get the event component prefix

```php
public static getEventsPrefix(): string|null
```



* This method is **static**.





**Return Value:**

The event component prefix, or null if not set




***

### setEventsPrefix

Sets the events prefix.

```php
public static setEventsPrefix(string|null $eventsPrefix): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$eventsPrefix` | **string|null** | The prefix to be used for events. Pass null to remove the prefix. |





***

### fire

Fire an event.

```php
public fire(string $task, mixed|null $data = null, bool $cancelable = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$task` | **string** | The task to execute. |
| `$data` | **mixed|null** | The optional data to pass to the event. |
| `$cancelable` | **bool** | Whether the event is cancelable or not. Defaults to false. |





***


***
