***

# FieldController

Class Controller



* Full name: `\Zemit\Modules\Api\Controllers\FieldController`
* Parent class: [`\Zemit\Modules\Api\Controller`](../Controller.md)






## Inherited methods


### getContentType

Get the content type based on the given parameters.

```php
public getContentType(array|null $params = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$params` | **array|null** | Optional. The parameters to determine the content type. If not provided, it will use the default parameters. |


**Return Value:**

The content type. Possible values: "json", "csv", "xlsx".



**Throws:**
<p>When an unsupported content type is provided.</p>

- [`Exception`](../../../../Exception.md)



***

### getFilename

Returns the filename for the exported file.

```php
public getFilename(): string
```

The filename is generated based on the model class name, with any
namespaces replaced by slashes, and then slugified. It is then
prepended with the current date in the 'Y-m-d' format.







**Return Value:**

The generated filename for the exported file.




***

### getExportColumns

Retrieves the columns from the given list of data.

```php
public getExportColumns(array $list): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **array** | The list of data to extract columns from. |


**Return Value:**

An associative array containing the export columns as keys.




***

### export

Exports the given list to a specified file in the specified format.

```php
public export(array $list = [], string|null $filename = null, string|null $contentType = null, array|null $params = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **array** | The list of data to export. |
| `$filename` | **string|null** | The filename of the exported file. If not provided, the default filename will be used. |
| `$contentType` | **string|null** | The content type of the exported file. If not provided, the default content type will be used. |
| `$params` | **array|null** | Additional parameters for the export process. If not provided, the default parameters will be used. |


**Return Value:**

Returns true if the export was successful, otherwise false.



**Throws:**
<p>Thrown if the specified content type is not supported.</p>

- [`Exception`](../../../../Exception.md)



***

### exportXml

Exports the given list to an XML file with the specified filename.

```php
public exportXml(array $list, string|null $filename = null, ?array $params = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **array** | The list of data to export. |
| `$filename` | **string|null** | The filename of the exported XML file. If not provided, a default filename will be used. |
| `$params` | **?array** |  |





***

### exportJson

Export data as JSON file for download.

```php
public exportJson(mixed $list, string|null $filename = null, int $flags = JSON_PRETTY_PRINT, int $depth = 2048): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **mixed** | The data to be exported as JSON. Can be an array, object, or any serializable data type. |
| `$filename` | **string|null** | The name of the exported file. If not provided, the default filename will be used. |
| `$flags` | **int** | Optional JSON encoding options. Default is JSON_PRETTY_PRINT. |
| `$depth` | **int** | Optional maximum depth of recursion. Default is 2048. |





***

### exportExcel

Export data as an Excel spreadsheet

```php
public exportExcel(array $list, string|null $filename = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **array** | The data to be exported |
| `$filename` | **string|null** | The desired filename for the exported file (optional) |





***

### exportCsv



```php
public exportCsv(array $list, ?string $filename = null, ?array $params = null): \Phalcon\Http\ResponseInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$list` | **array** |  |
| `$filename` | **?string** |  |
| `$params` | **?array** |  |




**Throws:**

- [`InvalidArgument`](https://csv.thephpleague.com/){:target="_blank"}

- [`CannotInsertRecord`](https://csv.thephpleague.com/){:target="_blank"}

- [`Exception`](https://csv.thephpleague.com/){:target="_blank"}



***

### expose

Expose properties of an item

```php
public expose(mixed $item, array|null $expose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$item` | **mixed** | The item to expose properties for |
| `$expose` | **array|null** | The array defining which properties to expose (optional).<br />If not provided, the default $this->getExpose() method will be used. |


**Return Value:**

The exposed properties as an array




***

### listExpose

List entities with specified expose definition

```php
public listExpose(iterable $items, array|null $expose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$items` | **iterable** | The iterable collection of items to be listed |
| `$expose` | **array|null** | The expose definition for the entities (optional)<br />If not provided, the default $this->getListExpose() method will be used. |


**Return Value:**

The array of exposed entities




***

### exportExpose

Export items with expose definition

```php
public exportExpose(iterable $items, array|null $expose = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$items` | **iterable** | The items to be exported |
| `$expose` | **array|null** | The expose definition for the items.<br />If not provided, the default $this->getExportExpose() definition will be used. |


**Return Value:**

The exported items




***

### getModelName

Retrieves the name of the model associated with the controller.

```php
public getModelName(): string|null
```









**Return Value:**

The name of the model associated with the controller, or null if not found.




***

### setModelName

Sets the name of the model to be used.

```php
public setModelName(string|null $modelName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modelName` | **string|null** | The name of the model to be set. |





***

### getModelNamespaces

Gets the namespaces used for the model lookup.

```php
public getModelNamespaces(): array
```

If no model namespace is set, the namespaces defined in the loader will be returned.







**Return Value:**

The namespaces used for the model lookup.




***

### setModelNamespaces

Set the namespaces for the models.

```php
public setModelNamespaces(array|null $modelNamespaces): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modelNamespaces` | **array|null** | The array of namespaces for the models. |





***

### getModelNameFromController

Retrieves the model name from the controller by following certain naming conventions.

```php
public getModelNameFromController(array|null $namespaces = null, string $needle = 'Models'): string|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$namespaces` | **array|null** | Optional. An array of namespaces to search for the model. Default is null and will use $this->getModelNamespaces(). |
| `$needle` | **string** | Optional. The keyword to search for in the namespace. Default is 'Models'. |


**Return Value:**

The model name if found, otherwise null.




***

### getControllerName

Returns the name of the controller.

```php
public getControllerName(): string
```

If the controller name is not set in the dispatcher, it extracts the controller name from the class name
of the current instance.







**Return Value:**

The name of the controller.




***

### loadModel

Loads a model by its name using the modelsManager.

```php
public loadModel(string|null $modelName = null): \Phalcon\Mvc\ModelInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modelName` | **string|null** | The name of the model to load. Default is null and will use $this->getModelName(). |


**Return Value:**

The loaded model.




***

### appendModelName

Appends the model name to the specified field string, if not already present.

```php
public appendModelName(string $field, string|null $modelName = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$field` | **string** | The field string to append the model name to. |
| `$modelName` | **string|null** | The name of the model to append. If null, the default model name will be used. |


**Return Value:**

The modified field string with the model name appended.




***

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
