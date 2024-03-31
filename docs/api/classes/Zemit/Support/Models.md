***

# Models

Allow to get mapped classes without using magic methods



* Full name: `\Zemit\Support\Models`
* Parent class: [`\Zemit\Di\Injectable`](../Di/Injectable.md)



## Properties


### instances

Store an array of instances

```php
public array $instances
```






***

## Methods


### __construct



```php
public __construct(?array $mapping = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$mapping` | **?array** |  |





***

### getInstances

Get an array of mapped models

```php
public getInstances(): array
```












***

### setInstance

Set the instance for a class

```php
public setInstance(string $class, \Zemit\Mvc\Model $instance): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** |  |
| `$instance` | **\Zemit\Mvc\Model** |  |





***

### unsetInstance

Remove an existing class

```php
public unsetInstance(string $map): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$map` | **string** |  |





***

### getInstance

Return an instance of a specified class implementing Model interface

```php
public getInstance(string $class): \Zemit\Mvc\Model
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$class` | **string** | The fully qualified class name |


**Return Value:**

An instance of the specified class




***

### getBackup

Return an instance of \Zemit\Models\Interfaces\BackupInterface

```php
public getBackup(): \Zemit\Models\Interfaces\BackupInterface
```












***

### getAudit

Return an instance of \Zemit\Models\Interfaces\AuditInterface

```php
public getAudit(): \Zemit\Models\Interfaces\AuditInterface
```












***

### getAuditDetail

Return an instance of \Zemit\Models\Interfaces\AuditDetailInterface

```php
public getAuditDetail(): \Zemit\Models\Interfaces\AuditDetailInterface
```












***

### getLog

Return an instance of \Zemit\Models\Interfaces\LogInterface

```php
public getLog(): \Zemit\Models\Interfaces\LogInterface
```












***

### getEmail

Return an instance of \Zemit\Models\Interfaces\EmailInterface

```php
public getEmail(): \Zemit\Models\Interfaces\EmailInterface
```












***

### getJob

Return an instance of \Zemit\Models\Interfaces\JobInterface

```php
public getJob(): \Zemit\Models\Interfaces\JobInterface
```












***

### getFile

Return an instance of \Zemit\Models\Interfaces\FileInterface

```php
public getFile(): \Zemit\Models\Interfaces\FileInterface
```












***

### getSession

Return an instance of \Zemit\Models\Interfaces\SessionInterface

```php
public getSession(): \Zemit\Models\Interfaces\SessionInterface
```












***

### getFlag

Return an instance of \Zemit\Models\Interfaces\FlagInterface

```php
public getFlag(): \Zemit\Models\Interfaces\FlagInterface
```












***

### getSetting

Return an instance of \Zemit\Models\Interfaces\SettingInterface

```php
public getSetting(): \Zemit\Models\Interfaces\SettingInterface
```












***

### getLang

Return an instance of \Zemit\Models\Interfaces\LangInterface

```php
public getLang(): \Zemit\Models\Interfaces\LangInterface
```












***

### getTranslate

Return an instance of \Zemit\Models\Interfaces\TranslateInterface

```php
public getTranslate(): \Zemit\Models\Interfaces\TranslateInterface
```












***

### getTranslateField

Return an instance of \Zemit\Models\Interfaces\TranslateFieldInterface

```php
public getTranslateField(): \Zemit\Models\Interfaces\TranslateFieldInterface
```












***

### getTranslateTable

Return an instance of \Zemit\Models\Interfaces\TranslateTableInterface

```php
public getTranslateTable(): \Zemit\Models\Interfaces\TranslateTableInterface
```












***

### getWorkspace

Return an instance of \Zemit\Models\Interfaces\WorkspaceInterface

```php
public getWorkspace(): \Zemit\Models\Interfaces\WorkspaceInterface
```












***

### getWorkspaceLang

Return an instance of \Zemit\Models\Interfaces\WorkspaceInterface

```php
public getWorkspaceLang(): \Zemit\Models\Interfaces\WorkspaceLangInterface
```












***

### getPage

Return an instance of \Zemit\Models\Interfaces\PageInterface

```php
public getPage(): \Zemit\Models\Interfaces\PageInterface
```












***

### getPost

Return an instance of \Zemit\Models\Interfaces\PostInterface

```php
public getPost(): \Zemit\Models\Interfaces\PostInterface
```












***

### getTemplate

Return an instance of \Zemit\Models\Interfaces\TemplateInterface

```php
public getTemplate(): \Zemit\Models\Interfaces\TemplateInterface
```












***

### getTable

Return an instance of \Zemit\Models\Interfaces\TableInterface

```php
public getTable(): \Zemit\Models\Interfaces\TableInterface
```












***

### getField

Return an instance of \Zemit\Models\Interfaces\FieldInterface

```php
public getField(): \Zemit\Models\Interfaces\FieldInterface
```












***

### getProfile

Return an instance of \Zemit\Models\Interfaces\ProfileInterface

```php
public getProfile(): \Zemit\Models\Interfaces\ProfileInterface
```












***

### getOauth2

Return an instance of \Zemit\Models\Interfaces\UserInterface

```php
public getOauth2(): \Zemit\Models\Interfaces\Oauth2Interface
```












***

### getUser

Return an instance of \Zemit\Models\Interfaces\UserInterface

```php
public getUser(): \Zemit\Models\Interfaces\UserInterface
```












***

### getUserType

Return an instance of \Zemit\Models\Interfaces\UserTypeInterface

```php
public getUserType(): \Zemit\Models\Interfaces\UserTypeInterface
```












***

### getUserGroup

Return an instance of \Zemit\Models\Interfaces\UserGroupInterface

```php
public getUserGroup(): \Zemit\Models\Interfaces\UserGroupInterface
```












***

### getUserRole

Return an instance of \Zemit\Models\Interfaces\UserRoleInterface

```php
public getUserRole(): \Zemit\Models\Interfaces\UserRoleInterface
```












***

### getUserFeature

Return an instance of \Zemit\Models\Interfaces\UserFeatureInterface

```php
public getUserFeature(): \Zemit\Models\Interfaces\UserFeatureInterface
```












***

### getRole

Return an instance of \Zemit\Models\Interfaces\RoleInterface

```php
public getRole(): \Zemit\Models\Interfaces\RoleInterface
```












***

### getRoleRole

Return an instance of \Zemit\Models\Interfaces\RoleRoleInterface

```php
public getRoleRole(): \Zemit\Models\Interfaces\RoleRoleInterface
```












***

### getRoleFeature

Return an instance of \Zemit\Models\Interfaces\RoleFeatureInterface

```php
public getRoleFeature(): \Zemit\Models\Interfaces\RoleFeatureInterface
```












***

### getGroup

Return an instance of \Zemit\Models\Interfaces\GroupInterface

```php
public getGroup(): \Zemit\Models\Interfaces\GroupInterface
```












***

### getGroupRole

Return an instance of \Zemit\Models\Interfaces\GroupRoleInterface

```php
public getGroupRole(): \Zemit\Models\Interfaces\GroupRoleInterface
```












***

### getGroupType

Return an instance of \Zemit\Models\Interfaces\GroupTypeInterface

```php
public getGroupType(): \Zemit\Models\Interfaces\GroupTypeInterface
```












***

### getGroupFeature

Return an instance of \Zemit\Models\Interfaces\GroupFeatureInterface

```php
public getGroupFeature(): \Zemit\Models\Interfaces\GroupFeatureInterface
```












***

### getType

Return an instance of \Zemit\Models\Interfaces\TypeInterface

```php
public getType(): \Zemit\Models\Interfaces\TypeInterface
```












***

### getFeature

Return an instance of \Zemit\Models\Interfaces\FeatureInterface

```php
public getFeature(): \Zemit\Models\Interfaces\FeatureInterface
```












***


## Inherited methods


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
> Automatically generated on 2024-03-28
