***

# Blameable

Zemit\Mvc\Model\Traits\Behavior\Blameable

Allows to automatically update a model’s attribute saving the datetime when a
record is created or updated

* Full name: `\Zemit\Mvc\Model\Behavior\Blameable`
* Parent class: [`Behavior`](https://docs.phalcon.io/latest/api/){:target="_blank"}



## Properties


### parentId



```php
protected static ?int $parentId
```



* This property is **static**.


***

### snapshot



```php
protected ?array $snapshot
```






***

### changedFields



```php
protected ?array $changedFields
```






***

### auditClass



```php
protected string $auditClass
```






***

### auditDetailClass



```php
protected string $auditDetailClass
```






***

### userClass



```php
protected string $userClass
```






***

## Methods


### __construct



```php
public __construct(array $options = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **array** |  |





***

### notify



```php
public notify(string $type, \Phalcon\Mvc\ModelInterface $model): ?bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$type` | **string** |  |
| `$model` | **\Phalcon\Mvc\ModelInterface** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### createAudit

Create new audit
Return true if the audit was created

```php
public createAudit(string $type, \Zemit\Mvc\Model $model): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$type` | **string** |  |
| `$model` | **\Zemit\Mvc\Model** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### collectData

Return true if data has been collected

```php
protected collectData(\Zemit\Mvc\Model $model): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$model` | **\Zemit\Mvc\Model** |  |





***


## Inherited methods


### getEnabled

Return true if the behavior is enabled
on the current model instance

```php
public getEnabled(): bool
```












***

### setEnabled

Set true to enable the behavior
on the current model instance

```php
public setEnabled(bool $enabled): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$enabled` | **bool** |  |





***

### getStaticEnabled

Return true if the behavior is enabled
globally for every model instance

```php
public static getStaticEnabled(): bool
```



* This method is **static**.








***

### setStaticEnabled

Set true to enable the behavior
globally for every model instance

```php
public static setStaticEnabled(bool $staticEnabled): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$staticEnabled` | **bool** |  |





***

### enable

Enable the behavior
on the current model instance

```php
public enable(): void
```












***

### disable

Disable the behavior
on the current model instance

```php
public disable(): void
```












***

### staticEnable

Enable the behavior
globally for every model instance

```php
public static staticEnable(): void
```



* This method is **static**.








***

### staticDisable

Disable the behavior
globally for every model instance

```php
public static staticDisable(): void
```



* This method is **static**.








***

### isEnabled

Return true if the behavior is enabled
on the current model instance and globally

```php
public isEnabled(): bool
```












***

### isDisabled

Return true if the behavior is enabled
on the current model instance and globally

```php
public isDisabled(): bool
```












***


***
