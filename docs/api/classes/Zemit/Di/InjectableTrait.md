***

# InjectableTrait

The InjectableTrait trait provides methods for using dependency injection within an object.



* Full name: `\Zemit\Di\InjectableTrait`



## Properties


### container

Holds the container instance.

```php
public \Phalcon\Di\DiInterface|null $container
```






***

### instanceContainer

Holds a list of loaded services from the container

```php
public array $instanceContainer
```






***

## Methods


### getDI

Returns the Dependency Injection (DI) container used by this object.

```php
public getDI(): \Phalcon\Di\DiInterface
```









**Return Value:**

The DI container instance.




***

### setDI

Sets the dependency injection container.

```php
public setDI(\Phalcon\Di\DiInterface $container): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$container` | **\Phalcon\Di\DiInterface** | The dependency injection container. |





***

### __isset

Checks if a property is set.

```php
public __isset(string $name): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$name` | **string** | The name of the property to check. |


**Return Value:**

True if the property is set, false otherwise.




***

### __get

Magic method __get.

```php
public __get(string $name): mixed
```

Retrieves the value of a non-existent or inaccessible property.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$name` | **string** | The name of the property. |


**Return Value:**

The value of the property if it exists, or null if the property is undefined.




***

***

