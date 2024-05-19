***

# UserTask





* Full name: `\Zemit\Modules\Cli\Tasks\UserTask`
* Parent class: [`\Zemit\Modules\Cli\Task`](../Task.md)



## Properties


### cliDoc



```php
public string $cliDoc
```






***



## Inherited methods


### initialize



```php
public initialize(): void
```












***

### getDefinitions



```php
public getDefinitions(): mixed
```












***

### createAction



```php
final public createAction(string $email, ?string $password = null): mixed
```





* This method is **final**.


**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$email` | **string** |  |
| `$password` | **?string** |  |





***

### roleAction



```php
final public roleAction(string $username, string $role): mixed
```





* This method is **final**.


**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$username` | **string** |  |
| `$role` | **string** |  |





***

### passwordAction



```php
final public passwordAction(?string $username = null, ?string $password = null): array
```





* This method is **final**.


**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$username` | **?string** |  |
| `$password` | **?string** |  |





***

### addModelsPermissions



```php
public addModelsPermissions(?array $tables = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tables` | **?array** |  |





***

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
