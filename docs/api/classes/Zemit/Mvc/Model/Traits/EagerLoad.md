***

# EagerLoad





* Full name: `\Zemit\Mvc\Model\Traits\EagerLoad`




## Methods


### find



```php
public static find(mixed $parameters = null): \Phalcon\Mvc\Model\ResultsetInterface
```



* This method is **static**.
* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$parameters` | **mixed** |  |





***

### findFirst



```php
public static findFirst(mixed $parameters = null): mixed
```



* This method is **static**.
* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$parameters` | **mixed** |  |





***

### findWith

<code>
<?php

```php
public static findWith(array $arguments): array
```

$limit  = 100;
$offset = max(0, $this->request->getQuery('page', 'int') - 1) * $limit;

$manufacturers = Manufacturer::with('Robots.Parts', [
    'limit' => [$limit, $offset]
]);

foreach ($manufacturers as $manufacturer) {
    foreach ($manufacturer->robots as $robot) {
        foreach ($robot->parts as $part) { ... }
    }
}

</code>

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





***

### findFirstWith

Same as EagerLoadingTrait::findWith() for a single record

```php
public static findFirstWith(array $arguments): ?\Phalcon\Mvc\ModelInterface
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





***

### with



```php
public static with(array $arguments): mixed
```



* This method is **static**.


* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





**See Also:**

* self::findWith() - 

***

### firstWith



```php
public static firstWith(array $arguments): mixed
```



* This method is **static**.


* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





**See Also:**

* self::findFirstWith() - 

***

### __callStatic

Call magic method to make the with works in an implicit way

```php
public static __callStatic(string $method, array $arguments = []): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$method` | **string** |  |
| `$arguments` | **array** |  |





***

### findFirstWithBy

Call native Phalcon FindFirstBy function then eager load relationships from the model

```php
private static findFirstWithBy(string $forwardMethod, array $arguments): ?\Phalcon\Mvc\ModelInterface
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$forwardMethod` | **string** |  |
| `$arguments` | **array** |  |





***

### findWithBy

Call native Phalcon findBy function then eager load relationships from the resultset

```php
private static findWithBy(string $forwardMethod, array $arguments): ?array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$forwardMethod` | **string** |  |
| `$arguments` | **array** |  |





***

### load

<code>

```php
public load(array $arguments): ?\Phalcon\Mvc\ModelInterface
```

$manufacturer = Manufacturer::findFirstById(51);

$manufacturer->load('Robots.Parts');

foreach ($manufacturer->robots as $robot) {
   foreach ($robot->parts as $part) { ... }
}

</code>






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





***

### getParametersFromArguments

Get the query parameters from a list of arguments

```php
public static getParametersFromArguments(array& $arguments): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$arguments` | **array** |  |





***

***

