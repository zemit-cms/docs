***

# AuthActions





* Full name: `\Zemit\Mvc\Controller\Traits\Actions\AuthActions`




## Methods


### getAction

Create a refresh a session

```php
public getAction(bool $refresh = false): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$refresh` | **bool** |  |





***

### refreshAction

Refresh or create a session

```php
public refreshAction(): bool
```












***

### loginAction

Login Action
- Require an active session to bind the logged in userId

```php
public loginAction(): bool
```












***

### loginAsAction

Login As Action
- Requires an active session to bind the logged in userId

```php
public loginAsAction(): bool
```












***

### logoutAction

Log the user out from the database session

```php
public logoutAction(): bool
```












***

### logoutAsAction

Login Action
- Requires an active session to bind the logged in userId

```php
public logoutAsAction(): bool
```












***

### resetAction

Reset Action
- Requires an active session to bind the logged in userId

```php
public resetAction(): bool
```












***

***
> Automatically generated on 2024-03-28

