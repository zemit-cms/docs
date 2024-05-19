***

# Identity

Identity Management



* Full name: `\Zemit\Identity`
* Parent class: [`\Zemit\Di\Injectable`](./Di/Injectable.md)
* This class implements:
[`\Zemit\Support\Options\OptionsInterface`](./Support/Options/OptionsInterface.md)



## Properties


### sessionKey



```php
public string $sessionKey
```






***

### store



```php
public array $store
```






***

### user



```php
public ?\Zemit\Models\Interfaces\UserInterface $user
```






***

### userAs



```php
public ?\Zemit\Models\Interfaces\UserInterface $userAs
```






***

### currentSession



```php
public ?\Zemit\Models\Interfaces\SessionInterface $currentSession
```






***

## Methods


### initialize

Forces some options

```php
public initialize(): void
```












***

### hasRole

Check whether the current identity has roles

```php
public hasRole(?array $roles = null, bool $or = false, bool $inherit = true): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$roles` | **?array** |  |
| `$or` | **bool** |  |
| `$inherit` | **bool** |  |





***

### getUserId

Get the User ID

```php
public getUserId(bool $as = false): ?int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$as` | **bool** |  |





***

### getUserAsId

Get the User (As) ID

```php
public getUserAsId(): ?int
```












***

### has

Check if the needles meet the haystack using nested arrays
Reversing ANDs and ORs within each nested subarray

```php
public has(array|string|null $needles = null, array $haystack = [], bool $or = false): bool
```

$this->has(['dev', 'admin'], $this->getUser()->getRoles(), true); // 'dev' OR 'admin'
$this->has(['dev', 'admin'], $this->getUser()->getRoles(), false); // 'dev' AND 'admin'

$this->has(['dev', 'admin'], $this->getUser()->getRoles()); // 'dev' AND 'admin'
$this->has([['dev', 'admin']], $this->getUser()->getRoles()); // 'dev' OR 'admin'
$this->has([[['dev', 'admin']]], $this->getUser()->getRoles()); // 'dev' AND 'admin'






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$needles` | **array|string|null** | Needles to match and meet the rules |
| `$haystack` | **array** | Haystack array to search into |
| `$or` | **bool** | True to force with "OR" , false to force "AND" condition |


**Return Value:**

Return true or false if the needles rules are being met




***

### getJwt

Create or refresh a session

```php
public getJwt(bool $refresh = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$refresh` | **bool** |  |




**Throws:**

- [`\Phalcon\Encryption\Security\JWT\Exceptions\ValidatorException|\Phalcon\Encryption\Security\Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getIdentity

Get basic Identity information

```php
public getIdentity(bool $inherit = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$inherit` | **bool** |  |




**Throws:**

- [`Exception`](../Exception.md)



***

### getInheritedRoleList

Return the list of inherited role list (recursively)

```php
public getInheritedRoleList(array $roleIndexList = []): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$roleIndexList` | **array** |  |





***

### isLoggedIn

Return true if the user is currently logged in

```php
public isLoggedIn(bool $as = false, bool $force = false): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$as` | **bool** |  |
| `$force` | **bool** |  |





***

### isLoggedInAs

Return true if the user is currently logged in

```php
public isLoggedInAs(bool $force = false): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$force` | **bool** |  |





***

### getUser

Return the user object based on the session

```php
public getUser(bool $as = false, bool|null $force = null): \Zemit\Models\Interfaces\UserInterface|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$as` | **bool** | Flag to indicate whether to get the user as another user |
| `$force` | **bool|null** | Flag to indicate whether to force the retrieval of the user object |


**Return Value:**

The user object or null if session is not available




***

### getUserAs

Get Identity User (As)

```php
public getUserAs(): ?\Zemit\Models\Interfaces\UserInterface
```












***

### setUser

Set Identity User

```php
public setUser(?\Zemit\Models\Interfaces\UserInterface $user): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$user` | **?\Zemit\Models\Interfaces\UserInterface** |  |





***

### setUserAs

Set Identity User (As)

```php
public setUserAs(?\Zemit\Models\Interfaces\UserInterface $user): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$user` | **?\Zemit\Models\Interfaces\UserInterface** |  |





***

### getRoleList

Get the "Roles" related to the current session

```php
public getRoleList(bool $inherit = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$inherit` | **bool** |  |





***

### getGroupList

Get the "Groups" related to the current session

```php
public getGroupList(bool $inherit = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$inherit` | **bool** |  |





***

### getTypeList

Get the "Types" related to the current session

```php
public getTypeList(bool $inherit = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$inherit` | **bool** |  |





***

### getAclRoles

Return the list of ACL roles
- Reserved roles: guest, cli, everyone

```php
public getAclRoles(array|null $roleList = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$roleList` | **array|null** |  |





***

### loginAs

Login as User

```php
public loginAs(?array $params = []): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$params` | **?array** |  |





***

### logoutAs

Log off User (As)

```php
public logoutAs(): array
```












***

### oauth2

OAuth2 authentication

```php
public oauth2(string $provider, int $providerUuid, string $accessToken, string|null $refreshToken = null, array|null $meta = []): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$provider` | **string** | The OAuth2 provider |
| `$providerUuid` | **int** | The UUID associated with the provider |
| `$accessToken` | **string** | The access token provided by the provider |
| `$refreshToken` | **string|null** | The refresh token provided by the provider (optional) |
| `$meta` | **array|null** | Additional metadata associated with the user (optional) |


**Return Value:**

Returns an array with the following keys:
- 'saved': Indicates whether the OAuth2 entity was saved successfully
- 'loggedIn': Indicates whether the user is currently logged in
- 'loggedInAs': Indicates the user that is currently logged in
- 'messages': An array of validation messages



**Throws:**

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### login

Login request
Requires an active session to bind the logged in userId

```php
public login(array $params = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$params` | **array** |  |





***

### logout

Logout the user and return the logout status, login status, and validation messages

```php
public logout(): array
```









**Return Value:**

The array containing the logout status, login status, and validation messages




***

### reset



```php
public reset(array|null $params = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$params` | **array|null** |  |





***

### getKeyToken

Retrieve the key and token from various authorization sources

```php
public getKeyToken(string|null $jwt = null, string|null $key = null, string|null $token = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$jwt` | **string|null** | The JWT token |
| `$key` | **string|null** | The key |
| `$token` | **string|null** | The token |


**Return Value:**

An array containing the key and token



**Throws:**

- [`ValidatorException`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getKeyTokenFromAuthorization

Get key and token from authorization

```php
public getKeyTokenFromAuthorization(array $authorization): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$authorization` | **array** | The authorization array, where the first element is the authorization type and the second element is the authorization token |


**Return Value:**

The key and token extracted from the authorization session claim. If the key or token is not found, null will be returned for that value.



**Throws:**

- [`ValidatorException`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getKeyTokenFromClaimToken

Get the key and token from the claim token

```php
public getKeyTokenFromClaimToken(string $claimToken, string $sessionKey): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$claimToken` | **string** | The claim token |
| `$sessionKey` | **string** | The session key |


**Return Value:**

The key and token, [key, token]



**Throws:**

- [`ValidatorException`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getSession

Return the session by key if the token is valid

```php
public getSession(?string $key = null, ?string $token = null, bool $refresh = false): ?\Zemit\Models\Interfaces\SessionInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **?string** |  |
| `$token` | **?string** |  |
| `$refresh` | **bool** |  |





***

### getSessionId

Return the session ID if available, otherwise return null

```php
public getSessionId(): int|null
```












***

### getClaim



```php
public getClaim(string $token, string|null $claim = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$token` | **string** |  |
| `$claim` | **string|null** |  |




**Throws:**

- [`ValidatorException`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### getJwtToken

Generate a new JWT Token (string)

```php
public getJwtToken(string $id, array $data = [], array $options = []): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$id` | **string** |  |
| `$data` | **array** |  |
| `$options` | **array** |  |




**Throws:**

- [`ValidatorException`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### findUserById

Get the User from the database using the ID

```php
public findUserById(int $id): ?\Zemit\Models\Interfaces\UserInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$id` | **int** |  |





***

### findUser

Get the user from the database using the username or email

```php
public findUser(string $string): ?\Zemit\Models\Interfaces\UserInterface
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$string` | **string** |  |





***


## Inherited methods


### __construct

Constructs a new instance of the class.

```php
public __construct(array|null $options = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **array|null** | An optional array of options to initialize the instance with. Default is null. |





***

### initializeOptions

Initializes the options for the object.

```php
public initializeOptions(array|null $options = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **array|null** | The options to be initialized. If null, an empty array will be used. |





***

### initialize

Initializes the object.

```php
public initialize(): void
```

This method is responsible for performing any necessary setup or initialization tasks for the object.
It does not accept any parameters and does not return a value.










***

### setOptions

Sets the options for the object.

```php
public setOptions(array $options, bool $merge = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **array** | The array of options to be set. |
| `$merge` | **bool** | Whether to merge the existing options with the new options. Defaults to false. |





***

### getOptions

Retrieves all options.

```php
public getOptions(): array
```









**Return Value:**

An array containing all the options.




***

### setOption

Sets the value of the option specified by the given key.

```php
public setOption(string $key, mixed $value = null, bool $merge = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** | The key of the option. |
| `$value` | **mixed** | The value to be set for the option. |
| `$merge` | **bool** | Whether to merge the new value with an existing value if the option already exists. |





***

### getOption

Retrieves the value of the option specified by the given key.

```php
public getOption(string $key, mixed $default = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** | The key of the option. |
| `$default` | **mixed** | The default value to be returned if the option does not exist. |


**Return Value:**

The value of the option specified by the key, or the default value if the option does not exist.




***

### hasOption

Checks if the option specified by the given key exists.

```php
public hasOption(string $key): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** | The key of the option. |


**Return Value:**

Returns true if the option exists, false otherwise.




***

### removeOption

Remove an option by key

```php
public removeOption(string $key): void
```

Removes the option with the given key from the options array.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **string** | The key of the option to be removed |





***

### resetOptions

Reset all options to their default values
- Uses the defaultOptions property to set the options

```php
public resetOptions(): void
```












***

### clearOptions

Clear all options

```php
public clearOptions(): void
```

This method clears all the options stored in the class.
After calling this method, the options array will be empty.










***

### getDI



```php
public getDI(): \Phalcon\Di\DiInterface
```




* This method is **abstract**.







***

### getConfig

Retrieve the config from DI

```php
public getConfig(): \Zemit\Bootstrap\Config
```












***

### setModelsMap

Set the models mapping or retrieve the mapped models from the config

```php
public setModelsMap(?array $modelsMap = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modelsMap` | **?array** |  |





***

### getModelsMap

Get an array of mapped models

```php
public getModelsMap(): array
```












***

### setClassMap

Map a new class

```php
public setClassMap(string $map, string $class): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$map` | **string** |  |
| `$class` | **string** |  |





***

### removeClassMap

Remove an existing class

```php
public removeClassMap(string $map): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$map` | **string** |  |





***

### getClassMap

Return the class mapping

```php
public getClassMap(string $class): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |





***

### getBackupClass

Return the mapped class name of \Zemit\Models\Backup::class

```php
public getBackupClass(): string
```












***

### getAuditClass

Return the mapped class name of \Zemit\Models\Audit::class

```php
public getAuditClass(): string
```












***

### getAuditDetailClass

Return the mapped class name of \Zemit\Models\AuditDetail::class

```php
public getAuditDetailClass(): string
```












***

### getLogClass

Return the mapped class name of \Zemit\Models\Log::class

```php
public getLogClass(): string
```












***

### getEmailClass

Return the mapped class name of \Zemit\Models\Email::class

```php
public getEmailClass(): string
```












***

### getJobClass

Return the mapped class name of \Zemit\Models\Job::class

```php
public getJobClass(): string
```












***

### getFileClass

Return the mapped class name of \Zemit\Models\File::class

```php
public getFileClass(): string
```












***

### getSessionClass

Return the mapped class name of \Zemit\Models\Session::class

```php
public getSessionClass(): string
```












***

### getFlagClass

Return the mapped class name of \Zemit\Models\Flag::class

```php
public getFlagClass(): string
```












***

### getSettingClass

Return the mapped class name of \Zemit\Models\Setting::class

```php
public getSettingClass(): string
```












***

### getLangClass

Return the mapped class name of \Zemit\Models\Lang::class

```php
public getLangClass(): string
```












***

### getTranslateClass

Return the mapped class name of \Zemit\Models\Translate::class

```php
public getTranslateClass(): string
```












***

### getTranslateFieldClass

Return the mapped class name of \Zemit\Models\TranslateField::class

```php
public getTranslateFieldClass(): string
```












***

### getTranslateTableClass

Return the mapped class name of \Zemit\Models\TranslateTable::class

```php
public getTranslateTableClass(): string
```












***

### getWorkspaceClass

Return the mapped class name of \Zemit\Models\Workspace::class

```php
public getWorkspaceClass(): string
```












***

### getWorkspaceLangClass

Return the mapped class name of \Zemit\Models\WorkspaceLang::class

```php
public getWorkspaceLangClass(): string
```












***

### getPageClass

Return the mapped class name of \Zemit\Models\Page::class

```php
public getPageClass(): string
```












***

### getPostClass

Return the mapped class name of \Zemit\Models\Post::class

```php
public getPostClass(): string
```












***

### getTemplateClass

Return the mapped class name of \Zemit\Models\Template::class

```php
public getTemplateClass(): string
```












***

### getTableClass

Return the mapped class name of \Zemit\Models\Table::class

```php
public getTableClass(): string
```












***

### getFieldClass

Return the mapped class name of \Zemit\Models\Field::class

```php
public getFieldClass(): string
```












***

### getProfileClass

Return the mapped class name of \Zemit\Models\Profile::class

```php
public getProfileClass(): string
```












***

### getOauth2Class

Return the mapped class name of \Zemit\Models\Oauth2::class

```php
public getOauth2Class(): string
```












***

### getUserClass

Return the mapped class name of \Zemit\Models\User::class

```php
public getUserClass(): string
```












***

### getUserTypeClass

Return the mapped class name of \Zemit\Models\UserType::class

```php
public getUserTypeClass(): string
```












***

### getUserGroupClass

Return the mapped class name of \Zemit\Models\UserGroup::class

```php
public getUserGroupClass(): string
```












***

### getUserRoleClass

Return the mapped class name of \Zemit\Models\UserRole::class

```php
public getUserRoleClass(): string
```












***

### getUserFeatureClass

Return the mapped class name of \Zemit\Models\UserFeature::class

```php
public getUserFeatureClass(): string
```












***

### getRoleClass

Return the mapped class name of \Zemit\Models\Role::class

```php
public getRoleClass(): string
```












***

### getRoleRoleClass

Return the mapped class name of \Zemit\Models\RoleRole::class

```php
public getRoleRoleClass(): string
```












***

### getRoleFeatureClass

Return the mapped class name of \Zemit\Models\RoleFeature::class

```php
public getRoleFeatureClass(): string
```












***

### getGroupClass

Return the mapped class name of \Zemit\Models\Group::class

```php
public getGroupClass(): string
```












***

### getGroupRoleClass

Return the mapped class name of \Zemit\Models\GroupRole::class

```php
public getGroupRoleClass(): string
```












***

### getGroupTypeClass

Return the mapped class name of \Zemit\Models\GroupType::class

```php
public getGroupTypeClass(): string
```












***

### getGroupFeatureClass

Return the mapped class name of \Zemit\Models\GroupFeature::class

```php
public getGroupFeatureClass(): string
```












***

### getTypeClass

Return the mapped class name of \Zemit\Models\Type::class

```php
public getTypeClass(): string
```












***

### getFeatureClass

Return the mapped class name of \Zemit\Models\Feature::class

```php
public getFeatureClass(): string
```












***


***
