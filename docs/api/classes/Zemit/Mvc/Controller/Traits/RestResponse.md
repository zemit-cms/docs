***

# RestResponse





* Full name: `\Zemit\Mvc\Controller\Traits\RestResponse`




## Methods


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

