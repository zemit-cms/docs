***

# FilterFields





* Full name: `\Zemit\Mvc\Controller\Traits\Query\Fields\FilterFields`



## Properties


### filterFields



```php
protected ?\Phalcon\Support\Collection $filterFields
```






***

## Methods


### initializeFilterFields

Initializes the filter fields.

```php
public initializeFilterFields(): void
```

This method is responsible for initializing the necessary filter fields for the model










***

### setFilterFields

Sets the fields for filtering data.

```php
public setFilterFields(\Phalcon\Support\Collection|null $filterFields): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filterFields` | **\Phalcon\Support\Collection|null** | The array of filter fields.<br />Pass null to allow filtering all fields. |





***

### getFilterFields

Returns the filter fields.

```php
public getFilterFields(): \Phalcon\Support\Collection|null
```

This method retrieves the filter fields for the model.
If filter fields have been set, it returns the collection of filter fields.
If no filter fields have been set, it returns null.

Note: The filter fields are the fields that are allowed to be used within database queries.







**Return Value:**

The collection of filter fields or null if no filter fields have been set.




***

***
> Automatically generated on 2024-03-28

