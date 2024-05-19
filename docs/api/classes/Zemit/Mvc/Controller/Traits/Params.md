***

# Params





* Full name: `\Zemit\Mvc\Controller\Traits\Params`




## Methods


### getParam

Get a specific parameter value by key.

```php
public getParam(string $key, array|string|null $filters = null, mixed $default = null, array|null $params = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** | The key of the parameter. |
| `$filters` | **array|string|null** | Optional. The filters to apply to the parameter value. Defaults to null. |
| `$default` | **mixed** | Optional. The default value if the parameter does not exist. Defaults to null. |
| `$params` | **array|null** | Optional. The array of parameters to search from. Defaults to null. |


**Return Value:**

The value of the specified parameter, after applying the filters if provided. If the parameter does not exist,
then the default value is returned if provided. If both the parameter and the default value are missing,
then the value from the dispatcher's parameter is returned.



**Throws:**

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getParams

Retrieves the request parameters.

```php
public getParams(array|null $filters = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filters` | **array|null** | An optional array of filters to apply to the parameters. |


**Return Value:**

The request parameters.




***

***

