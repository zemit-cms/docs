***

# Uuid





* Full name: `\Zemit\Mvc\Model\Traits\Uuid`




## Methods


### initializeUuid

Initializing Uuid

```php
public initializeUuid(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### getBinaryUuid

Get Binary Uuid

```php
private getBinaryUuid(string $uuid): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$uuid` | **string** | The UUID string to convert to binary representation |


**Return Value:**

The binary representation of the given UUID




***

### setUuidBehavior

Set Uuid Behavior

```php
public setUuidBehavior(\Zemit\Mvc\Model\Behavior\Transformable $uuidBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$uuidBehavior` | **\Zemit\Mvc\Model\Behavior\Transformable** |  |





***

### getUuidBehavior

Get Uuid Behavior

```php
public getUuidBehavior(): \Zemit\Mvc\Model\Behavior\Transformable
```












***

***
> Automatically generated on 2024-03-28

