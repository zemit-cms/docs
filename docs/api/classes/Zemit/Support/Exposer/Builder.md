***

# Builder





* Full name: `\Zemit\Support\Exposer\Builder`
* This class implements:
[`\Zemit\Support\Exposer\BuilderInterface`](./BuilderInterface.md)



## Properties


### value



```php
private mixed $value
```






***

### parent



```php
private mixed $parent
```






***

### columns



```php
private ?array $columns
```






***

### field



```php
private ?string $field
```






***

### key



```php
private ?string $key
```






***

### contextKey



```php
private ?string $contextKey
```






***

### expose



```php
private bool $expose
```






***

### protected



```php
private bool $protected
```






***

## Methods


### getValue



```php
public getValue(): mixed
```












***

### setValue



```php
public setValue(mixed $value = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | **mixed** |  |





***

### getParent



```php
public getParent(): mixed
```












***

### setParent



```php
public setParent(mixed $parent = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$parent` | **mixed** |  |





***

### getKey



```php
public getKey(): ?string
```












***

### setKey



```php
public setKey(?string $key = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **?string** |  |





***

### getContextKey



```php
public getContextKey(): ?string
```












***

### setContextKey



```php
public setContextKey(?string $contextKey = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$contextKey` | **?string** |  |





***

### getField



```php
public getField(): ?string
```












***

### setField



```php
public setField(?string $field = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$field` | **?string** |  |





***

### getColumns



```php
public getColumns(): ?array
```












***

### setColumns



```php
public setColumns(?array $columns = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columns` | **?array** |  |





***

### getExpose



```php
public getExpose(): bool
```












***

### setExpose



```php
public setExpose(bool $expose): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$expose` | **bool** |  |





***

### getProtected



```php
public getProtected(): bool
```












***

### setProtected



```php
public setProtected(bool $protected): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$protected` | **bool** |  |





***

### getFullKey



```php
public getFullKey(): ?string
```












***

### processKey



```php
public static processKey(?string $key = null): ?string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **?string** |  |





***


***
> Automatically generated on 2024-03-28
