***

# Config





* Full name: `\Zemit\Config\Config`
* Parent class: [`Config`](https://docs.phalcon.io/latest/api/){:target="_blank"}
* This class implements:
[`\Zemit\Config\ConfigInterface`](./ConfigInterface.md)




## Methods


### pathToArray

Return the element as an array

```php
public pathToArray(string $path, ?array $defaultValue = null, ?string $delimiter = null): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$path` | **string** |  |
| `$defaultValue` | **?array** |  |
| `$delimiter` | **?string** |  |





***

### merge



```php
public merge(mixed $toMerge, bool $append = false): \Phalcon\Config\ConfigInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$toMerge` | **mixed** |  |
| `$append` | **bool** |  |





***

### internalMergeAppend



```php
final protected internalMergeAppend(array $source, array $target): array
```





* This method is **final**.


**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$source` | **array** |  |
| `$target` | **array** |  |





***

### getDateTime

Get a modified DateTime.

```php
public getDateTime(string $modifier, \DateTimeImmutable|null $dateTime = null): \DateTimeImmutable
```

Note: This is a helper to enhance strict typings and safely use DateTime within config






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modifier` | **string** | The modifier string to modify the DateTime. |
| `$dateTime` | **\DateTimeImmutable|null** | Optional. The DateTime to modify. Defaults to current DateTime if not provided. |


**Return Value:**

The modified DateTime object.



**Throws:**
<p>If the modification of the DateTime fails.</p>

- [`Exception`](../../Exception.md)



***

### getModelInstance

Return a new model instance from class name

```php
public getModelInstance(string $class): \Zemit\Mvc\ModelInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |





***

### getModelClass

Return the mapped model class name from $this->models->$class

```php
public getModelClass(string $class): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |





***

### setModelClass

Map a new model class

```php
public setModelClass(string $class, string $expected): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |
| `$expected` | **string** |  |





***

### resetModelClass

Map a new model class

```php
public resetModelClass(string $class): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |





***


***
> Automatically generated on 2024-03-28
