***

# DataLifeCycleTask





* Full name: `\Zemit\Modules\Cli\Tasks\DataLifeCycleTask`
* Parent class: [`\Zemit\Modules\Cli\Task`](../Task.md)



## Properties


### cliDoc



```php
public string $cliDoc
```






***

### models



```php
public ?array $models
```






***

### policies



```php
public ?array $policies
```






***

## Methods


### initialize



```php
public initialize(): void
```












***

### mainAction

Default action

```php
public mainAction(string $tables): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tables` | **string** |  |





***

### modelsAction



```php
public modelsAction(string $tables): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tables` | **string** |  |





***

### addModelsPermissions



```php
public addModelsPermissions(?array $models = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$models` | **?array** |  |





***


## Inherited methods


### beforeExecuteRoute



```php
public beforeExecuteRoute(): void
```












***

### helpAction



```php
public helpAction(): void
```












***

### mainAction



```php
public mainAction(): ?array
```












***

### normalizeResponse



```php
public normalizeResponse(bool $response = true, ?int $code = null, ?string $status = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$response` | **bool** |  |
| `$code` | **?int** |  |
| `$status` | **?string** |  |





***

### afterExecuteRoute

Handle rest response automagically

```php
public afterExecuteRoute(\Phalcon\Cli\Dispatcher $dispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dispatcher` | **\Phalcon\Cli\Dispatcher** |  |




**Throws:**

- [`CliException`](../../../Exception/CliException.md)



***


***
> Automatically generated on 2024-03-28
