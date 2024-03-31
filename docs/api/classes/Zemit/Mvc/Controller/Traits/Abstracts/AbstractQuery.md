***

# AbstractQuery





* Full name: `\Zemit\Mvc\Controller\Traits\Abstracts\AbstractQuery`




## Methods


### initializeFind



```php
public initializeFind(): void
```




* This method is **abstract**.







***

### setFind



```php
public setFind(?\Phalcon\Support\Collection $find): void
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?\Phalcon\Support\Collection** |  |





***

### getFind



```php
public getFind(): ?\Phalcon\Support\Collection
```




* This method is **abstract**.







***

### find



```php
public find(?array $find = null): \Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### findWith



```php
public findWith(?array $with = null, ?array $find = null): array
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$with` | **?array** |  |
| `$find` | **?array** |  |





***

### findFirst



```php
public findFirst(?array $find = null): mixed
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### findFirstWith



```php
public findFirstWith(?array $with = null, ?array $find = null): mixed
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$with` | **?array** |  |
| `$find` | **?array** |  |





***

### average



```php
public average(?array $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### count



```php
public count(?array $find = null): int|\Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### sum



```php
public sum(?array $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### maximum



```php
public maximum(?array $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### minimum



```php
public minimum(?array $find = null): float|\Phalcon\Mvc\Model\ResultsetInterface
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### getCalculationFind



```php
protected getCalculationFind(?array $find = null): array
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$find` | **?array** |  |





***

### generateBindKey



```php
public generateBindKey(string $prefix): string
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$prefix` | **string** |  |





***

***
> Automatically generated on 2024-03-28

