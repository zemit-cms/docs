***

# Exposer

Class Expose



* Full name: `\Zemit\Support\Exposer\Exposer`




## Methods


### createBuilder



```php
public static createBuilder(mixed $object, ?array $columns = null, ?bool $expose = null, ?bool $protected = null): \Zemit\Support\Exposer\Builder
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$object` | **mixed** |  |
| `$columns` | **?array** |  |
| `$expose` | **?bool** |  |
| `$protected` | **?bool** |  |





***

### getValue



```php
private static getValue(string $string, mixed $value): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$string` | **string** |  |
| `$value` | **mixed** |  |





***

### checkExpose



```php
private static checkExpose(\Zemit\Support\Exposer\Builder $builder): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$builder` | **\Zemit\Support\Exposer\Builder** |  |





***

### expose



```php
public static expose(\Zemit\Support\Exposer\Builder $builder): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$builder` | **\Zemit\Support\Exposer\Builder** |  |





***

### parseColumnsRecursive

Here to parse the columns parameter into some kind of flatten array with
the key path separated by dot "my.path" and the value true, false or a callback function
including the ExposeBuilder object

```php
public static parseColumnsRecursive(iterable|null $columns = null, string|null $context = null): array|null
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columns` | **iterable|null** |  |
| `$context` | **string|null** |  |





***


***
> Automatically generated on 2024-03-28
