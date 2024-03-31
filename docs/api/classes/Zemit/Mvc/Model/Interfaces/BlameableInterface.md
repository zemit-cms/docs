***

# BlameableInterface





* Full name: `\Zemit\Mvc\Model\Interfaces\BlameableInterface`
* Parent interfaces: [`\Zemit\Mvc\Model\Interfaces\Blameable\BlameAtInterface`](./Blameable/BlameAtInterface.md), [`\Zemit\Mvc\Model\Interfaces\Blameable\CreatedInterface`](./Blameable/CreatedInterface.md), [`\Zemit\Mvc\Model\Interfaces\Blameable\DeletedInterface`](./Blameable/DeletedInterface.md), [`\Zemit\Mvc\Model\Interfaces\Blameable\RestoredInterface`](./Blameable/RestoredInterface.md), [`\Zemit\Mvc\Model\Interfaces\Blameable\UpdatedInterface`](./Blameable/UpdatedInterface.md)


## Methods


### initializeBlameable



```php
public initializeBlameable(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### setBlameableBehavior



```php
public setBlameableBehavior(\Zemit\Mvc\Model\Behavior\Blameable $blameableBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$blameableBehavior` | **\Zemit\Mvc\Model\Behavior\Blameable** |  |





***

### getBlameableBehavior



```php
public getBlameableBehavior(): \Zemit\Mvc\Model\Behavior\Blameable
```












***

### addUserRelationship



```php
public addUserRelationship(string $field = 'userId', string $alias = 'UserEntity', array $params = [], string $ref = 'id', string $type = 'belongsTo', ?string $class = null): ?\Phalcon\Mvc\Model\Relation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$field` | **string** |  |
| `$alias` | **string** |  |
| `$params` | **array** |  |
| `$ref` | **string** |  |
| `$type` | **string** |  |
| `$class` | **?string** |  |





***


## Inherited methods


### getDateCallback



```php
public getDateCallback(string $format, ?int $timestamp = null): \Closure
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$format` | **string** |  |
| `$timestamp` | **?int** |  |





***

### initializeCreated



```php
public initializeCreated(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### setCreatedBehavior



```php
public setCreatedBehavior(\Zemit\Mvc\Model\Behavior\Transformable $createdBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$createdBehavior` | **\Zemit\Mvc\Model\Behavior\Transformable** |  |





***

### getCreatedBehavior



```php
public getCreatedBehavior(): \Zemit\Mvc\Model\Behavior\Transformable
```












***

### initializeDeleted



```php
public initializeDeleted(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### setDeletedBehavior



```php
public setDeletedBehavior(\Zemit\Mvc\Model\Behavior\Transformable $deletedBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$deletedBehavior` | **\Zemit\Mvc\Model\Behavior\Transformable** |  |





***

### getDeletedBehavior



```php
public getDeletedBehavior(): \Zemit\Mvc\Model\Behavior\Transformable
```












***

### initializeRestored



```php
public initializeRestored(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### setRestoredBehavior



```php
public setRestoredBehavior(\Zemit\Mvc\Model\Behavior\Transformable $restoredBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$restoredBehavior` | **\Zemit\Mvc\Model\Behavior\Transformable** |  |





***

### getRestoredBehavior



```php
public getRestoredBehavior(): \Zemit\Mvc\Model\Behavior\Transformable
```












***

### initializeUpdated



```php
public initializeUpdated(?array $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **?array** |  |





***

### setUpdatedBehavior



```php
public setUpdatedBehavior(\Zemit\Mvc\Model\Behavior\Transformable $updatedBehavior): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$updatedBehavior` | **\Zemit\Mvc\Model\Behavior\Transformable** |  |





***

### getUpdatedBehavior



```php
public getUpdatedBehavior(): \Zemit\Mvc\Model\Behavior\Transformable
```












***


***
> Automatically generated on 2024-03-28
