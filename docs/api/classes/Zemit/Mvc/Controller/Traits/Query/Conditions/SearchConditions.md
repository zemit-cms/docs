***

# SearchConditions

This trait provides methods for managing search conditions.



* Full name: `\Zemit\Mvc\Controller\Traits\Query\Conditions\SearchConditions`



## Properties


### searchConditions



```php
protected ?\Phalcon\Support\Collection $searchConditions
```






***

## Methods


### initializeSearchConditions

Initializes the search conditions.

```php
public initializeSearchConditions(): void
```











**Throws:**

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### setSearchConditions

Set the search conditions for this object.

```php
public setSearchConditions(\Phalcon\Support\Collection|null $searchConditions): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$searchConditions` | **\Phalcon\Support\Collection|null** | The search conditions to be set. |





***

### getSearchConditions

Returns the search conditions.

```php
public getSearchConditions(): \Phalcon\Support\Collection|null
```









**Return Value:**

The search conditions, represented as a collection.




***

### defaultSearchCondition

Generates the default search condition for the method.

```php
public defaultSearchCondition(): array|string|null
```









**Return Value:**

The default search condition, represented as an array containing the query, bind parameters, and bind types.



**Throws:**
<p>If an error occurs while filtering the search parameter.</p>

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

***
> Automatically generated on 2024-03-28

