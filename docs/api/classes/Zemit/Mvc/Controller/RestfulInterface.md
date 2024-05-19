***

# RestfulInterface





* Full name: `\Zemit\Mvc\Controller\RestfulInterface`
* Parent interfaces: [`\Zemit\Mvc\Controller\Traits\Interfaces\ExposeInterface`](./Traits/Interfaces/ExposeInterface.md), [`\Zemit\Mvc\Controller\RestInterface`](./RestInterface.md)




## Inherited methods


### expose



```php
public expose(mixed $item, ?array $expose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$item` | **mixed** |  |
| `$expose` | **?array** |  |





***

### listExpose



```php
public listExpose(iterable $items, ?array $listExpose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$items` | **iterable** |  |
| `$listExpose` | **?array** |  |





***

### exportExpose



```php
public exportExpose(iterable $items, ?array $exportExpose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$items` | **iterable** |  |
| `$exportExpose` | **?array** |  |





***

### isDebugEnabled



```php
public isDebugEnabled(): bool
```












***

### attachBehavior



```php
public attachBehavior(string $eventClass, ?string $eventType = null, ?int $priority = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$eventClass` | **string** |  |
| `$eventType` | **?string** |  |
| `$priority` | **?int** |  |





***

### attachBehaviors



```php
public attachBehaviors(array $behaviors = [], string $eventType = null, ?int $priority = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$behaviors` | **array** |  |
| `$eventType` | **string** |  |
| `$priority` | **?int** |  |





***

### getParam



```php
public getParam(string $key, array|string|null $filters = null, string $default = null, array $params = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** |  |
| `$filters` | **array|string|null** |  |
| `$default` | **string** |  |
| `$params` | **array** |  |





***

### getParams



```php
public getParams(array $filters = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$filters` | **array** |  |





***

### getFractalManager



```php
public getFractalManager(): \Zemit\Fractal\Manager
```












***

### setFractalManager



```php
public setFractalManager(?\Zemit\Fractal\Manager $manager): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$manager` | **?\Zemit\Fractal\Manager** |  |





***

### getFractalSerializer



```php
public getFractalSerializer(): \League\Fractal\Serializer\SerializerAbstract
```












***

### setFractalSerializer



```php
public setFractalSerializer(\League\Fractal\Serializer\SerializerAbstract $serializer): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$serializer` | **\League\Fractal\Serializer\SerializerAbstract** |  |





***

### getTransformer



```php
public getTransformer(): \League\Fractal\TransformerAbstract
```












***

### setTransformer



```php
public setTransformer(?\League\Fractal\TransformerAbstract $transformer = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$transformer` | **?\League\Fractal\TransformerAbstract** |  |





***

### hasTransformer



```php
public hasTransformer(): bool
```












***

### transformModel



```php
public transformModel(\Phalcon\Mvc\ModelInterface $model, ?\League\Fractal\TransformerAbstract $transformer = null, ?\Zemit\Fractal\Manager $fractalManager = null): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$model` | **\Phalcon\Mvc\ModelInterface** |  |
| `$transformer` | **?\League\Fractal\TransformerAbstract** |  |
| `$fractalManager` | **?\Zemit\Fractal\Manager** |  |





***

### transformResultset



```php
public transformResultset(\Phalcon\Mvc\Model\ResultsetInterface $resultset, ?\League\Fractal\TransformerAbstract $transformer = null, ?\Zemit\Fractal\Manager $fractalManager = null): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$resultset` | **\Phalcon\Mvc\Model\ResultsetInterface** |  |
| `$transformer` | **?\League\Fractal\TransformerAbstract** |  |
| `$fractalManager` | **?\Zemit\Fractal\Manager** |  |





***

### transformItem



```php
public transformItem(mixed $data, ?\League\Fractal\TransformerAbstract $transformer = null, ?\Zemit\Fractal\Manager $fractalManager = null): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **mixed** |  |
| `$transformer` | **?\League\Fractal\TransformerAbstract** |  |
| `$fractalManager` | **?\Zemit\Fractal\Manager** |  |





***

### transformCollection



```php
public transformCollection(mixed $data, ?\League\Fractal\TransformerAbstract $transformer = null, ?\Zemit\Fractal\Manager $fractalManager = null): ?array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **mixed** |  |
| `$transformer` | **?\League\Fractal\TransformerAbstract** |  |
| `$fractalManager` | **?\Zemit\Fractal\Manager** |  |





***

### setRestErrorResponse



```php
public setRestErrorResponse(int $code = 400, string $status = 'Bad Request', mixed $response = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$code` | **int** |  |
| `$status` | **string** |  |
| `$response` | **mixed** |  |





***

### setRestResponse



```php
public setRestResponse(mixed $response = null, int $code = null, string $status = null, int $jsonOptions, int $depth = 512): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$response` | **mixed** |  |
| `$code` | **int** |  |
| `$status` | **string** |  |
| `$jsonOptions` | **int** |  |
| `$depth` | **int** |  |





***


***
