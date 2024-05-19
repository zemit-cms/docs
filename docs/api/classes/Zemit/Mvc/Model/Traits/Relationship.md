***

# Relationship

Allow to automagically save relationship



* Full name: `\Zemit\Mvc\Model\Traits\Relationship`



## Properties


### keepMissingRelated



```php
private array $keepMissingRelated
```






***

### relationshipContext



```php
private string $relationshipContext
```






***

### dirtyRelated



```php
protected $dirtyRelated
```






***

## Methods


### appendMessage



```php
public appendMessage(\Phalcon\Messages\MessageInterface $message): \Phalcon\Mvc\ModelInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$message` | **\Phalcon\Messages\MessageInterface** |  |





***

### setKeepMissingRelated

Set the missing related configuration list

```php
public setKeepMissingRelated(array $keepMissingRelated): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$keepMissingRelated` | **array** |  |





***

### getKeepMissingRelated

Return the missing related configuration list

```php
public getKeepMissingRelated(): array
```












***

### getKeepMissingRelatedAlias

Return the keepMissing configuration for a specific relationship alias

```php
public getKeepMissingRelatedAlias(string $alias): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |





***

### setKeepMissingRelatedAlias

Set the keepMissing configuration for a specific relationship alias

```php
public setKeepMissingRelatedAlias(string $alias, bool $keepMissing): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |
| `$keepMissing` | **bool** |  |





***

### getRelationshipContext

Get the current relationship context

```php
public getRelationshipContext(): string
```












***

### setRelationshipContext

Set the current relationship context

```php
public setRelationshipContext(string $context): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$context` | **string** |  |





***

### getDirtyRelated

Return the dirtyRelated entities

```php
public getDirtyRelated(): array
```












***

### setDirtyRelated

Set the dirtyRelated entities

```php
public setDirtyRelated(array $dirtyRelated): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dirtyRelated` | **array** |  |





***

### getDirtyRelatedAlias

Return the dirtyRelated entities

```php
public getDirtyRelatedAlias(string $alias): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |





***

### setDirtyRelatedAlias

Return the dirtyRelated entities

```php
public setDirtyRelatedAlias(string $alias, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |
| `$value` | **mixed** |  |





***

### hasDirtyRelated

Check whether the current entity has dirty related or not

```php
public hasDirtyRelated(): bool
```












***

### hasDirtyRelatedAlias

Check whether the current entity has dirty related or not

```php
public hasDirtyRelatedAlias(string $alias): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |





***

### assign

{@inheritDoc}

```php
public assign(array $data, mixed $whiteList = null, mixed $dataColumnMap = null): \Phalcon\Mvc\ModelInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **array** |  |
| `$whiteList` | **mixed** |  |
| `$dataColumnMap` | **mixed** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### assignRelated

Assign related

```php
public assignRelated(array $data, array|null $whiteList = null, array|null $dataColumnMap = null): \Phalcon\Mvc\ModelInterface
```

Single
[alias => new Alias()] // create new alias

Many
[alias => [new Alias()]] // create new alias
[alias => [1, 2, 3, 4]] // append / merge 1, 2, 3, 4
[alias => [false, 1, 2, 4]]; // delete 3






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **array** |  |
| `$whiteList` | **array|null** |  |
| `$dataColumnMap` | **array|null** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### preSaveRelatedRecords

Saves related records that must be stored prior to save the master record
Refactored based on the native cphalcon version, so we can support :
- combined keys on relationship definition
- relationship context within the model messages based on the alias definition

```php
protected preSaveRelatedRecords(\Phalcon\Db\Adapter\AdapterInterface $connection, mixed $related, \Phalcon\Support\Collection\CollectionInterface $visited): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$connection` | **\Phalcon\Db\Adapter\AdapterInterface** |  |
| `$related` | **mixed** |  |
| `$visited` | **\Phalcon\Support\Collection\CollectionInterface** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### postSaveRelatedRecords

NOTE: we need this, this behaviour only happens:
- in many to many nodes
Fix uniqueness on combined keys in node entities, and possibly more.

```php
protected postSaveRelatedRecords(\Phalcon\Db\Adapter\AdapterInterface $connection, mixed $related, \Phalcon\Support\Collection\CollectionInterface $visited): bool
```

..






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$connection` | **\Phalcon\Db\Adapter\AdapterInterface** |  |
| `$related` | **mixed** |  |
| `$visited` | **\Phalcon\Support\Collection\CollectionInterface** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



**See Also:**

* https://forum.phalconphp.com/discussion/2190/many-to-many-expected-behaviour - * http://stackoverflow.com/questions/23374858/update-a-records-n-n-relationships - * https://github.com/phalcon/cphalcon/issues/2871 - 

***

### postSaveRelatedRecordsAfter



```php
public postSaveRelatedRecordsAfter(\Phalcon\Mvc\Model\RelationInterface $relation, mixed $relatedRecords, \Phalcon\Support\Collection\CollectionInterface $visited): ?bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$relation` | **\Phalcon\Mvc\Model\RelationInterface** |  |
| `$relatedRecords` | **mixed** |  |
| `$visited` | **\Phalcon\Support\Collection\CollectionInterface** |  |





***

### postSaveRelatedThroughAfter



```php
public postSaveRelatedThroughAfter(\Phalcon\Mvc\Model\RelationInterface $relation, mixed $relatedRecords, \Phalcon\Support\Collection\CollectionInterface $visited): ?bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$relation` | **\Phalcon\Mvc\Model\RelationInterface** |  |
| `$relatedRecords` | **mixed** |  |
| `$visited` | **\Phalcon\Support\Collection\CollectionInterface** |  |





***

### getEntityFromData

Get an entity from data

```php
public getEntityFromData(array $data, array $configuration = []): \Phalcon\Mvc\ModelInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **array** |  |
| `$configuration` | **array** |  |





***

### appendMessages



```php
public appendMessages(array $messages = [], ?string $context = null, ?int $index = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$messages` | **array** |  |
| `$context` | **?string** |  |
| `$index` | **?int** |  |





***

### appendMessagesFromRecord

Appends messages from a record to the current messages container.

```php
public appendMessagesFromRecord(\Phalcon\Mvc\ModelInterface|null $record = null, string|null $context = null, int|null $index = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$record` | **\Phalcon\Mvc\ModelInterface|null** | The record from which to append the messages. |
| `$context` | **string|null** | The context in which the messages should be added. Defaults to null. |
| `$index` | **int|null** | The index at which the messages should be added. Defaults to 0. |





***

### appendMessagesFromResultset

Append messages from a resultset to the current message container.

```php
public appendMessagesFromResultset(\Phalcon\Mvc\Model\ResultsetInterface|null $resultset = null, string|null $context = null, int|null $index = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$resultset` | **\Phalcon\Mvc\Model\ResultsetInterface|null** | The resultset containing the messages to be appended. If not provided, no messages will be appended. |
| `$context` | **string|null** | The context to assign to the appended messages. If not provided, the default context will be used. |
| `$index` | **int|null** | The index at which the messages should be inserted in the messages array. If not provided, the messages will be appended at the end. |





***

### appendMessagesFromRecordList

Appends messages from a record list to the current message container.

```php
public appendMessagesFromRecordList(iterable|null $recordList = null, string|null $context = null, int|null $index = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordList` | **iterable|null** | The list of records to append messages from. |
| `$context` | **string|null** | The context to associate with the messages. |
| `$index` | **int|null** | The index to use for the messages. |





***

### rebuildMessageContext

Rebuilds the message context.

```php
public rebuildMessageContext(\Phalcon\Messages\Message $message, string|null $context = null): string
```

This method appends the given context to the previous context stored in the message metadata.
If there is no previous context, only the given context is returned.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$message` | **\Phalcon\Messages\Message** | The message object whose context needs to be rebuilt. |
| `$context` | **string|null** | The context to be appended. |


**Return Value:**

The rebuilt context




***

### rebuildMessageIndex

Rebuilds the message index.

```php
public rebuildMessageIndex(\Phalcon\Messages\Message $message, int|null $index = null): string
```

This method constructs the new message index based on the provided $index argument
and the previous index stored in the message's metadata. It returns the new index
as a string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$message` | **\Phalcon\Messages\Message** | The message object for which the index is being rebuilt. |
| `$index` | **int|null** | The new index to be assigned to the message. Can be null. |


**Return Value:**

The new index as a string




***

### relatedToArray

Retrieves the related records as an array.

```php
public relatedToArray(array|null $columns = null, bool $useGetter = true): array
```

If $columns is provided, only the specified columns will be included in the array.
If $useGetter is set to true, it will use the getter methods of the related records.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columns` | **array|null** | (optional) The columns to include in the array for each related record |
| `$useGetter` | **bool** | (optional) Whether to use getter methods of the related records (default: true) |


**Return Value:**

The related records as an array




***

### getRelated

Overriding default phalcon getRelated in order to fix an important issue
where the related record is being stored into the "related" property and then
passed from the collectRelatedToSave and is mistakenly saved without the user consent

```php
public getRelated(string $alias,  $arguments = null): false|int|\Phalcon\Mvc\Model\Resultset\Simple
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$alias` | **string** |  |
| `$arguments` | **** |  |




**Throws:**

- [`Exception`](../../../../Exception.md)



***

### toArray

{@inheritDoc}

```php
public toArray(mixed $columns = null, mixed $useGetter = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columns` | **mixed** |  |
| `$useGetter` | **mixed** |  |





***

***

