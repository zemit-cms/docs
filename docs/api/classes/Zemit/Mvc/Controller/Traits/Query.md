***

# Query

Class Query

This class provides methods for building and executing database queries.
It is used as a trait in other classes that need query building capabilities.

* Full name: `\Zemit\Mvc\Controller\Traits\Query`



## Properties


### find



```php
protected ?\Phalcon\Support\Collection $find
```






***

## Methods


### initialize

Initializes the query builder with default values for various properties.

```php
public initialize(): mixed
```











**Throws:**

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}

- [`Exception`](../../../../Exception.md)



***

### initializeFind

Initializes the `find` property with a new Collection object.

```php
public initializeFind(): void
```

The values of various properties are assigned to the corresponding keys of the Collection object.










***

### setFind

Sets the value of the `find` property.

```php
public setFind(\Phalcon\Support\Collection|null $find): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **\Phalcon\Support\Collection|null** | The new value for the `find` property. |





***

### getFind

Retrieves the value of the `find` property.

```php
public getFind(): \Phalcon\Support\Collection|null
```









**Return Value:**

The value of the `find` property.




***

### prepareFind

Builds the `find` array for a query.

```php
public prepareFind(\Phalcon\Support\Collection|null $find = null, bool $ignoreKey = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **\Phalcon\Support\Collection|null** | The collection to build the find array from. Defaults to null. |
| `$ignoreKey` | **bool** | Whether to ignore the keys in the collection. Defaults to false. |


**Return Value:**

The built find array.




***

### find

Find records in the database using the specified criteria.

```php
public find(array|null $find = null): \Phalcon\Mvc\Model\ResultsetInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | Optional. An array of criteria to determine the records to find.<br />If not provided, the default criteria from `getFind()` method<br />will be used. Defaults to `null`. |


**Return Value:**

The result of the find operation.




***

### findWith

Find records in the database using the specified criteria and include related records.

```php
public findWith(array|null $with = null, array|null $find = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$with` | **array|null** | Optional. An array of related models to include<br />with the found records. Defaults to `null`. |
| `$find` | **array|null** | Optional. An array of criteria to determine the records to find.<br />If not provided, the default criteria from `getFind()` method<br />will be used. Defaults to `null`. |


**Return Value:**

The result of the find operation with loaded relationships.




***

### findFirst

Find the first record in the database using the specified criteria.

```php
public findFirst(array|null $find = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | Optional. An array of criteria to determine the record to find.<br />                        If not provided, the default criteria from `getFind()` method<br />                        will be used to find the first record. Defaults to `null`.<br /><br />// @todo \Phalcon\Mvc\ModelInterface&#124;\Phalcon\Mvc\Model\Row&#124;null |


**Return Value:**

The result of the find operation, which is the first record that matches the criteria.




***

### findFirstWith

Find the first record in the database using the specified criteria and relations.

```php
public findFirstWith(array|null $with = null, array|null $find = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$with` | **array|null** | Optional. An array of relations to eager load for the record.<br />If not provided, the default relations from `getWith()` method<br />will be used. Defaults to `null`. |
| `$find` | **array|null** | Optional. An array of criteria to determine the records to find.<br />If not provided, the default criteria from `getFind()` method<br />will be used. Defaults to `null`. |


**Return Value:**

The result of the find operation for the first record.




***

### average

Calculates the average value based on a given set of criteria.

```php
public average(array|null $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | The criteria to filter the records by (optional). |


**Return Value:**

The average value or a result set containing the average value.




***

### count

Retrieves the total count of items based on the specified model name and find criteria.

```php
public count(array|null $find = null): int|\Phalcon\Mvc\Model\ResultsetInterface
```

Note: limit and offset are removed from the parameters in order to retrieve the total count






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | An array of find criteria to filter the results. If null, the default criteria will be applied. |


**Return Value:**

The total count of items that match the specified criteria.



**Throws:**

- [`Exception`](../../../../Exception.md)



***

### sum

Calculates the sum of values based on a given search criteria.

```php
public sum(array|null $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | Optional: The criteria to find the maximum value from.<br />Default: null (will retrieve the `find` from $this->getFind()) |


**Return Value:**

The calculated sum of values.




***

### maximum

Retrieves the minimum value.

```php
public maximum(array|null $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | Optional: The criteria to find the maximum value from.<br />Default: null (will retrieve the `find` from $this->getFind()) |


**Return Value:**

The maximum value from the dataset
or a `ResultsetInterface` that represents the grouped maximum values.




***

### minimum

Retrieves the minimum value.

```php
public minimum(array|null $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | Optional: The criteria to find the minimum value from.<br />Default: null (will retrieve the `find` from $this->getFind()) |


**Return Value:**

The minimum value from the dataset
or a `ResultsetInterface` that represents the grouped minimum values.




***

### getCalculationFind

Retrieves the count criteria based on the specified find criteria.

```php
protected getCalculationFind(array|null $find = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **array|null** | An array of find criteria to filter the results. If null, the default criteria will be used. |


**Return Value:**

An array of filtered find criteria without the 'limit' and 'offset' keys.




***

### generateBindKey

Generates a unique bind key with the given prefix.

```php
public generateBindKey(string $prefix): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$prefix` | **string** | The prefix to be used in the bind key. |


**Return Value:**

The generated bind key.




***

***

