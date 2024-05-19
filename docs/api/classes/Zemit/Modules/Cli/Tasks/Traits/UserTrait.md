***

# UserTrait





* Full name: `\Zemit\Modules\Cli\Tasks\Traits\UserTrait`



## Properties


### tables



```php
public array $tables
```






***

## Methods


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

***

