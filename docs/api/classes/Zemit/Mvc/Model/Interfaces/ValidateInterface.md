***

# ValidateInterface





* Full name: `\Zemit\Mvc\Model\Interfaces\ValidateInterface`



## Methods


### genericValidation



```php
public genericValidation(?\Zemit\Filter\Validation $validator = null): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **?\Zemit\Filter\Validation** |  |





***

### addNotEmptyValidation



```php
public addNotEmptyValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = false): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addPresenceValidation



```php
public addPresenceValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addUnsignedIntValidation



```php
public addUnsignedIntValidation(\Zemit\Filter\Validation $validator, array|string $field = 'id', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addUnsignedBigIntValidation



```php
public addUnsignedBigIntValidation(\Zemit\Filter\Validation $validator, array|string $field = 'id', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addNumberValidation



```php
public addNumberValidation(\Zemit\Filter\Validation $validator, array|string $field, int $min, int $max, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$min` | **int** |  |
| `$max` | **int** |  |
| `$allowEmpty` | **bool** |  |





***

### addStringLengthValidation



```php
public addStringLengthValidation(\Zemit\Filter\Validation $validator, array|string $field, int $minChar, int $maxChar = 255, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$minChar` | **int** |  |
| `$maxChar` | **int** |  |
| `$allowEmpty` | **bool** |  |





***

### addInclusionInValidation



```php
public addInclusionInValidation(\Zemit\Filter\Validation $validator, array|string $field, array $domainList = [], bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$domainList` | **array** |  |
| `$allowEmpty` | **bool** |  |





***

### addBooleanValidation



```php
public addBooleanValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addInclusionValidation



```php
public addInclusionValidation(\Zemit\Filter\Validation $validator, array|string $field, array $domain = [], bool $allowEmpty = true, bool $strict = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$domain` | **array** |  |
| `$allowEmpty` | **bool** |  |
| `$strict` | **bool** |  |





***

### addUniquenessValidation



```php
public addUniquenessValidation(\Zemit\Filter\Validation $validator, string|array $field, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **string|array** |  |
| `$allowEmpty` | **bool** |  |





***

### addEmailValidation



```php
public addEmailValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addDateValidation



```php
public addDateValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true, string $format = Column::DATE_FORMAT): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |
| `$format` | **string** |  |





***

### addDateTimeValidation



```php
public addDateTimeValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true, string $format = Column::DATETIME_FORMAT): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |
| `$format` | **string** |  |





***

### addJsonValidation



```php
public addJsonValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true, int $depth = 512, int $flags): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |
| `$depth` | **int** |  |
| `$flags` | **int** |  |





***

### addColorValidation



```php
public addColorValidation(\Zemit\Filter\Validation $validator, array|string $field, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **array|string** |  |
| `$allowEmpty` | **bool** |  |





***

### addIdValidation



```php
public addIdValidation(\Zemit\Filter\Validation $validator, string $field = 'id'): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **string** |  |





***

### addPositionValidation



```php
public addPositionValidation(\Zemit\Filter\Validation $validator, string $field = 'position', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addSoftDeleteValidation



```php
public addSoftDeleteValidation(\Zemit\Filter\Validation $validator, string $field = 'deleted', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addUuidValidation



```php
public addUuidValidation(\Zemit\Filter\Validation $validator, string $field = 'uuid', bool $allowEmpty = false): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$field` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addCrudValidation



```php
public addCrudValidation(\Zemit\Filter\Validation $validator, string $userIdField, string $dateField, bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$userIdField` | **string** |  |
| `$dateField` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addCreatedValidation



```php
public addCreatedValidation(\Zemit\Filter\Validation $validator, string $createdByField = 'createdBy', string $createdAtField = 'createdAt', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$createdByField` | **string** |  |
| `$createdAtField` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addUpdatedValidation



```php
public addUpdatedValidation(\Zemit\Filter\Validation $validator, string $updatedByField = 'updatedBy', string $updatedAtField = 'updatedAt', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$updatedByField` | **string** |  |
| `$updatedAtField` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addDeletedValidation



```php
public addDeletedValidation(\Zemit\Filter\Validation $validator, string $deletedField = 'deletedBy', string $dateField = 'deletedAt', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$deletedField` | **string** |  |
| `$dateField` | **string** |  |
| `$allowEmpty` | **bool** |  |





***

### addRestoredValidation



```php
public addRestoredValidation(\Zemit\Filter\Validation $validator, string $restoredByField = 'restoredBy', string $restoredAtField = 'restoredAt', bool $allowEmpty = true): \Zemit\Filter\Validation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validator` | **\Zemit\Filter\Validation** |  |
| `$restoredByField` | **string** |  |
| `$restoredAtField` | **string** |  |
| `$allowEmpty` | **bool** |  |





***


***
> Automatically generated on 2024-03-28
