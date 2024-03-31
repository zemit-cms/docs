***

# ClamavController

Class Controller



* Full name: `\Zemit\Modules\Api\Controllers\ClamavController`
* Parent class: [`\Zemit\Mvc\Controller\Rest`](../../../Mvc/Controller/Rest.md)






## Inherited methods


### indexAction



```php
public indexAction(): void
```












***

### scanAction



```php
public scanAction(?string $filePath = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filePath` | **?string** |  |





***

### pingAction



```php
public pingAction(): bool
```












***

### versionAction



```php
public versionAction(): bool
```












***

### statsAction



```php
public statsAction(): bool
```












***

### reloadAction



```php
public reloadAction(): bool
```












***

### beforeExecuteRoute



```php
public beforeExecuteRoute(): void
```












***

### attachBehavior

Attach a behavior to the object.

```php
public attachBehavior(string $eventClass, string|null $eventType = null, int|null $priority = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$eventClass` | **string** | The behavior to attach. |
| `$eventType` | **string|null** | The event type to attach the behavior to. If null, the behavior will be attached to the default event type. |
| `$priority` | **int|null** | The priority of the behavior. If null, the behavior will be attached with the default priority. |





***

### attachBehaviors

Attach multiple behaviors to the object.

```php
public attachBehaviors(array $behaviors = [], string|null $eventType = null, int|null $priority = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$behaviors` | **array** | An array of behaviors to attach. |
| `$eventType` | **string|null** | The event type to attach the behaviors to. If null, the behaviors will be attached to all event types. |
| `$priority` | **int|null** | The priority of the behaviors. If null, the behaviors will be attached with the default priority. |





***

### isDebugEnabled

Returns whether debug mode is enabled.

```php
public isDebugEnabled(): bool
```









**Return Value:**

True if debug mode is enabled, false otherwise.




***

### getFractalManager

Get the Fractal Manager object.

```php
public getFractalManager(): \Zemit\Fractal\Manager
```

This method returns the Fractal Manager object used for transforming data.
If the Fractal Manager object is not already created, it will be created
and initialized with the Fractal Serializer before being returned.







**Return Value:**

The Fractal Manager object.




***

### setFractalManager

Set the Fractal Manager for the class.

```php
public setFractalManager(\Zemit\Fractal\Manager|null $manager): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$manager` | **\Zemit\Fractal\Manager|null** | The Fractal Manager to be set. If null, the Fractal Manager will be unset. |





***

### getFractalSerializer

Get the fractal serializer for the class.

```php
public getFractalSerializer(): \League\Fractal\Serializer\SerializerAbstract
```









**Return Value:**

The fractal serializer instance.




***

### setFractalSerializer

Set the Fractal serializer for the class.

```php
public setFractalSerializer(\League\Fractal\Serializer\SerializerAbstract $serializer): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$serializer` | **\League\Fractal\Serializer\SerializerAbstract** | The Fractal serializer to be set. |





***

### getTransformer

Get the transformer for the class.

```php
public getTransformer(): \League\Fractal\TransformerAbstract
```

If the transformer has not been set, a new instance of ModelTransformer will be created.







**Return Value:**

The transformer for the class.




***

### setTransformer

Set the transformer for the class.

```php
public setTransformer(\League\Fractal\TransformerAbstract|null $transformer = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$transformer` | **\League\Fractal\TransformerAbstract|null** | The transformer to be set. If null, the transformer will be unset. |





***

### hasTransformer

Determine if a default transformer has been set for the fractal manager

```php
public hasTransformer(): bool
```









**Return Value:**

Returns true if a default transformer has been set, false otherwise




***

### transformModel

Transform a model using a transformer and optionally a fractal manager.

```php
public transformModel(\Phalcon\Mvc\ModelInterface $model, \League\Fractal\TransformerAbstract|null $transformer = null, \Zemit\Fractal\Manager|null $fractalManager = null): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$model` | **\Phalcon\Mvc\ModelInterface** | The model to transform. |
| `$transformer` | **\League\Fractal\TransformerAbstract|null** | The transformer to use. If not provided, the default transformer will be used. |
| `$fractalManager` | **\Zemit\Fractal\Manager|null** | The fractal manager to use. If not provided, the default fractal manager will be used. |


**Return Value:**

The transformed model as an array, or null if the transformation fails.




***

### transformResultset

Transforms a resultset using the provided transformer and fractal manager.

```php
public transformResultset(\Phalcon\Mvc\Model\ResultsetInterface $resultset, \League\Fractal\TransformerAbstract|null $transformer = null, \Zemit\Fractal\Manager|null $fractalManager = null): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$resultset` | **\Phalcon\Mvc\Model\ResultsetInterface** | The resultset to be transformed. |
| `$transformer` | **\League\Fractal\TransformerAbstract|null** | The transformer instance to be used for transformation (optional). |
| `$fractalManager` | **\Zemit\Fractal\Manager|null** | The fractal manager instance to be used for transformation (optional). |


**Return Value:**

The transformed resultset as an array, or null if the transformation failed.




***

### transformItem

Transform an item using the specified transformer and Fractal manager

```php
public transformItem(mixed $data, \League\Fractal\TransformerAbstract|null $transformer = null, \Zemit\Fractal\Manager|null $fractalManager = null): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **mixed** | The data to transform |
| `$transformer` | **\League\Fractal\TransformerAbstract|null** | The transformer to use (optional, default is null) |
| `$fractalManager` | **\Zemit\Fractal\Manager|null** | The Fractal manager to use (optional, default is null) |


**Return Value:**

The transformed item as an array




***

### transformCollection

Transform a collection of data using a specified transformer and Fractal manager.

```php
public transformCollection(mixed $data, \League\Fractal\TransformerAbstract|null $transformer = null, \Zemit\Fractal\Manager|null $fractalManager = null): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **mixed** | The collection of data to be transformed. |
| `$transformer` | **\League\Fractal\TransformerAbstract|null** | The transformer to be used. If not provided, the default transformer will be used. |
| `$fractalManager` | **\Zemit\Fractal\Manager|null** | The Fractal manager to be used. If not provided, the default Fractal manager will be used. |


**Return Value:**

The transformed data as an array.




***

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

### setRestErrorResponse

Set the REST response error

```php
public setRestErrorResponse(int $code = 400, string $status = 'Bad Request', mixed $response = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$code` | **int** | The HTTP status code (default: 400) |
| `$status` | **string** | The status message (default: 'Bad Request') |
| `$response` | **mixed** | The response body (default: null) |


**Return Value:**

The REST response object



**Throws:**

- [`Exception`](../../../../Exception.md)



***

### setRestResponse

Sending rest response as a http response

```php
public setRestResponse(mixed $response = null, ?int $code = null, ?string $status = null, int $jsonOptions, int $depth = 512): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$response` | **mixed** |  |
| `$code` | **?int** |  |
| `$status` | **?string** |  |
| `$jsonOptions` | **int** |  |
| `$depth` | **int** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### afterExecuteRoute

Update the Dispatcher after executing the route.

```php
public afterExecuteRoute(\Phalcon\Mvc\Dispatcher $dispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dispatcher` | **\Phalcon\Mvc\Dispatcher** | The Dispatcher instance. |




**Throws:**

- [`Exception`](../../../../Exception.md)



***


***
> Automatically generated on 2024-03-28
