***

# FilterConditions





* Full name: `\Zemit\Mvc\Controller\Traits\Query\Conditions\FilterConditions`



## Properties


### filterConditions



```php
protected ?\Phalcon\Support\Collection $filterConditions
```






***

## Methods


### initializeFilterConditions



```php
public initializeFilterConditions(): void
```












***

### setFilterConditions



```php
public setFilterConditions(?\Phalcon\Support\Collection $filterConditions): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filterConditions` | **?\Phalcon\Support\Collection** |  |





***

### getFilterConditions



```php
public getFilterConditions(): ?\Phalcon\Support\Collection
```












***

### defaultFilterCondition

Retrieves the filter condition based on the specified filters, allowed filters, and logical operator.

```php
public defaultFilterCondition(array|null $filters = null, array|null $allowedFilters = null, bool $or = false): array|string|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filters` | **array|null** | An array of filters. |
| `$allowedFilters` | **array|null** | An array of allowed filters. |
| `$or` | **bool** | The logical operator to use for combining multiple filters. Default is false. |


**Return Value:**

The filter condition with the specified filters, or null if no filters are provided.



**Throws:**
<p>if a filter field property or filter operator property is empty, or if a filter field is not allowed.</p>

- [`Exception`](../../../../../../Exception.md)



***

### getFilterOperator

Retrieves the equivalent filter operator for the specified alias or operator.

```php
public getFilterOperator(string $operator): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$operator` | **string** | The alias or operator for the filter. |


**Return Value:**

The equivalent filter operator, or an empty string if the operator is not allowed.




***

### getBindTypeFromRawValue

Retrieves the bind type based on the raw value.

```php
public getBindTypeFromRawValue(mixed|null $rawValue = null): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$rawValue` | **mixed|null** | The raw value to determine the bind type for. |


**Return Value:**

The bind type based on the raw value. Possible values are:
- Column::BIND_PARAM_STR: If the raw value is a string or an array.
- Column::BIND_PARAM_INT: If the raw value is an integer.
- Column::BIND_PARAM_BOOL: If the raw value is a boolean.
- Column::BIND_PARAM_DECIMAL: If the raw value is a float or a double.
- Column::BIND_PARAM_NULL: If the raw value is null or its type is not recognized.




***

***
> Automatically generated on 2024-03-28

