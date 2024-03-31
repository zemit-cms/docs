
***

# Zemit Project Documentation



This is an automatically generated documentation for **Zemit Project Documentation**.


## Namespaces


### \Zemit


| Class | Description |
|-------|-------------|
| [`Bootstrap`](./classes/Zemit/Bootstrap.md) | Zemit Core's Bootstrap for the MVC Application & CLI Console mode|
| [`Exception`](./classes/Zemit/Exception.md) | Zemit\Exception<br />All Zemit exceptions should use or extend this exception|
| [`Identity`](./classes/Zemit/Identity.md) | Identity Management|
| [`Locale`](./classes/Zemit/Locale.md) | Allow to manage and lookup the locale for the localisation|
| [`Tag`](./classes/Zemit/Tag.md) | This file is part of the Zemit Framework.|




### \Zemit\Acl


| Class | Description |
|-------|-------------|
| [`Acl`](./classes/Zemit/Acl/Acl.md) | Class Acl|




| Interface | Description |
|-----------|-------------|
| [`AclInterface`](./classes/Zemit/Acl/AclInterface.md) | |



### \Zemit\Assets


| Class | Description |
|-------|-------------|
| [`Manager`](./classes/Zemit/Assets/Manager.md) | {@inheritDoc}|




### \Zemit\Autoload


| Class | Description |
|-------|-------------|
| [`Loader`](./classes/Zemit/Autoload/Loader.md) | Class Loader|




### \Zemit\Bootstrap


| Class | Description |
|-------|-------------|
| [`Config`](./classes/Zemit/Bootstrap/Config.md) | Global Zemit Configuration|
| [`Deployment`](./classes/Zemit/Bootstrap/Deployment.md) | Zemit Deployment Configuration|
| [`Devtools`](./classes/Zemit/Bootstrap/Devtools.md) | Global Zemit Configuration|
| [`Router`](./classes/Zemit/Bootstrap/Router.md) | Zemit Router<br />{@inheritDoc}|




### \Zemit\Bootstrap\Permissions


| Class | Description |
|-------|-------------|
| [`TableConfig`](./classes/Zemit/Bootstrap/Permissions/TableConfig.md) | |
| [`WorkspaceConfig`](./classes/Zemit/Bootstrap/Permissions/WorkspaceConfig.md) | |




### \Zemit\Cache


| Class | Description |
|-------|-------------|
| [`Cache`](./classes/Zemit/Cache/Cache.md) | Class Cache|




### \Zemit\Cli


| Class | Description |
|-------|-------------|
| [`Console`](./classes/Zemit/Cli/Console.md) | |
| [`Dispatcher`](./classes/Zemit/Cli/Dispatcher.md) | |
| [`ExceptionHandler`](./classes/Zemit/Cli/ExceptionHandler.md) | |
| [`Module`](./classes/Zemit/Cli/Module.md) | |
| [`Router`](./classes/Zemit/Cli/Router.md) | |
| [`Task`](./classes/Zemit/Cli/Task.md) | |




| Interface | Description |
|-----------|-------------|
| [`DispatcherInterface`](./classes/Zemit/Cli/DispatcherInterface.md) | |
| [`TaskInterface`](./classes/Zemit/Cli/TaskInterface.md) | Interface for task handlers|



### \Zemit\Config


| Class | Description |
|-------|-------------|
| [`Config`](./classes/Zemit/Config/Config.md) | |




| Interface | Description |
|-----------|-------------|
| [`ConfigInterface`](./classes/Zemit/Config/ConfigInterface.md) | |



### \Zemit\Db


| Class | Description |
|-------|-------------|
| [`Column`](./classes/Zemit/Db/Column.md) | |
| [`Profiler`](./classes/Zemit/Db/Profiler.md) | {@inheritdoc}|




### \Zemit\Db\Adapter\Pdo


| Class | Description |
|-------|-------------|
| [`Mysql`](./classes/Zemit/Db/Adapter/Pdo/Mysql.md) | |




### \Zemit\Db\Dialect


| Class | Description |
|-------|-------------|
| [`Mysql`](./classes/Zemit/Db/Dialect/Mysql.md) | Class MySQL|




### \Zemit\Db\Events


| Class | Description |
|-------|-------------|
| [`Logger`](./classes/Zemit/Db/Events/Logger.md) | Responsible for logging database query events.|
| [`Profiler`](./classes/Zemit/Db/Events/Profiler.md) | Class Profiler|




### \Zemit\Di


| Class | Description |
|-------|-------------|
| [`Injectable`](./classes/Zemit/Di/Injectable.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|



| Trait | Description |
|-------|-------------|
| [`InjectableProperties`](./classes/Zemit/Di/InjectableProperties.md) | |
| [`InjectableTrait`](./classes/Zemit/Di/InjectableTrait.md) | The InjectableTrait trait provides methods for using dependency injection within an object.|




### \Zemit\Dispatcher


| Class | Description |
|-------|-------------|
| [`AbstractDispatcher`](./classes/Zemit/Dispatcher/AbstractDispatcher.md) | |



| Trait | Description |
|-------|-------------|
| [`DispatcherTrait`](./classes/Zemit/Dispatcher/DispatcherTrait.md) | |




| Interface | Description |
|-----------|-------------|
| [`DispatcherInterface`](./classes/Zemit/Dispatcher/DispatcherInterface.md) | |



### \Zemit\Encryption


| Class | Description |
|-------|-------------|
| [`Security`](./classes/Zemit/Encryption/Security.md) | {@inheritDoc}|




### \Zemit\Events




| Trait | Description |
|-------|-------------|
| [`EventsAwareTrait`](./classes/Zemit/Events/EventsAwareTrait.md) | The EventsAwareTrait provides methods for managing events within a class.|




### \Zemit\Exception


| Class | Description |
|-------|-------------|
| [`CliException`](./classes/Zemit/Exception/CliException.md) | Zemit\Exception<br />All Zemit exceptions should use or extend this exception|
| [`HttpException`](./classes/Zemit/Exception/HttpException.md) | Zemit\Exception<br />All Zemit exceptions should use or extend this exception|




### \Zemit\Filter


| Class | Description |
|-------|-------------|
| [`Filter`](./classes/Zemit/Filter/Filter.md) | Filter class extends the \Phalcon\Filter\Filter class and provides additional methods for filtering data.|
| [`FilterFactory`](./classes/Zemit/Filter/FilterFactory.md) | |
| [`Validation`](./classes/Zemit/Filter/Validation.md) | {@inheritDoc}|




### \Zemit\Filter\Sanitize


| Class | Description |
|-------|-------------|
| [`IPv4`](./classes/Zemit/Filter/Sanitize/IPv4.md) | |
| [`IPv6`](./classes/Zemit/Filter/Sanitize/IPv6.md) | |
| [`Json`](./classes/Zemit/Filter/Sanitize/Json.md) | |
| [`Md5`](./classes/Zemit/Filter/Sanitize/Md5.md) | |




### \Zemit\Filter\Validation\Validator


| Class | Description |
|-------|-------------|
| [`Color`](./classes/Zemit/Filter/Validation/Validator/Color.md) | |
| [`Json`](./classes/Zemit/Filter/Validation/Validator/Json.md) | |




### \Zemit\Fractal


| Class | Description |
|-------|-------------|
| [`Manager`](./classes/Zemit/Fractal/Manager.md) | The Manager class extends the League\Fractal\Manager class and provides additional functionality.|
| [`ModelTransformer`](./classes/Zemit/Fractal/ModelTransformer.md) | This class is responsible for transforming a Model object into an array representation.|
| [`Transformer`](./classes/Zemit/Fractal/Transformer.md) | This class extends the TransformerAbstract class and implements the InjectionAwareInterface.|




### \Zemit\Fractal\Serializer


| Class | Description |
|-------|-------------|
| [`RawArraySerializer`](./classes/Zemit/Fractal/Serializer/RawArraySerializer.md) | Class RawArraySerializer|




### \Zemit\Html


| Class | Description |
|-------|-------------|
| [`Escaper`](./classes/Zemit/Html/Escaper.md) | Zemit\Html\Escaper|
| [`TagFactory`](./classes/Zemit/Html/TagFactory.md) | Class TagFactory|




### \Zemit\Html\Escaper





| Interface | Description |
|-----------|-------------|
| [`EscaperInterface`](./classes/Zemit/Html/Escaper/EscaperInterface.md) | |



### \Zemit\Http


| Class | Description |
|-------|-------------|
| [`Request`](./classes/Zemit/Http/Request.md) | Represents an HTTP request.|
| [`Response`](./classes/Zemit/Http/Response.md) | Represents an HTTP response.|
| [`StatusCode`](./classes/Zemit/Http/StatusCode.md) | According to Wikipedia List of HTTP status codes|




| Interface | Description |
|-----------|-------------|
| [`RequestInterface`](./classes/Zemit/Http/RequestInterface.md) | {@inheritDoc}|
| [`ResponseInterface`](./classes/Zemit/Http/ResponseInterface.md) | {@inheritDoc}|



### \Zemit\Locales


| Class | Description |
|-------|-------------|
| [`En`](./classes/Zemit/Locales/En.md) | |
| [`Fr`](./classes/Zemit/Locales/Fr.md) | |




### \Zemit\Logger


| Class | Description |
|-------|-------------|
| [`Loggers`](./classes/Zemit/Logger/Loggers.md) | |




### \Zemit\Models


| Class | Description |
|-------|-------------|
| [`AbstractModel`](./classes/Zemit/Models/AbstractModel.md) | Events<br />- afterCreate<br />- afterDelete<br />- afterFetch<br />- afterSave<br />- afterUpdate<br />- afterValidation<br />- afterValidationOnCreate<br />- afterValidationOnUpdate<br />- beforeDelete<br />- beforeCreate<br />- beforeSave<br />- beforeUpdate<br />- beforeValidation<br />- beforeValidationOnCreate<br />- beforeValidationOnUpdate<br />- notDeleted<br />- notSaved<br />- onValidationFails<br />- prepareSave<br />- validation|
| [`Audit`](./classes/Zemit/Models/Audit.md) | Class Audit|
| [`AuditDetail`](./classes/Zemit/Models/AuditDetail.md) | Class AuditDetail|
| [`Backup`](./classes/Zemit/Models/Backup.md) | Class Backup|
| [`Category`](./classes/Zemit/Models/Category.md) | Class Category|
| [`Data`](./classes/Zemit/Models/Data.md) | Class Data|
| [`Email`](./classes/Zemit/Models/Email.md) | Class Email|
| [`EmailFile`](./classes/Zemit/Models/EmailFile.md) | Class EmailFile|
| [`Feature`](./classes/Zemit/Models/Feature.md) | Class Feature|
| [`Field`](./classes/Zemit/Models/Field.md) | Class Field|
| [`File`](./classes/Zemit/Models/File.md) | Class File|
| [`FileRelation`](./classes/Zemit/Models/FileRelation.md) | Class FileRelation|
| [`Flag`](./classes/Zemit/Models/Flag.md) | Class Flag|
| [`Group`](./classes/Zemit/Models/Group.md) | Class Group|
| [`GroupFeature`](./classes/Zemit/Models/GroupFeature.md) | Class GroupFeature|
| [`GroupRole`](./classes/Zemit/Models/GroupRole.md) | Class GroupRole|
| [`GroupType`](./classes/Zemit/Models/GroupType.md) | Class GroupType|
| [`Job`](./classes/Zemit/Models/Job.md) | Class Job|
| [`JobScheduler`](./classes/Zemit/Models/JobScheduler.md) | Class JobScheduler|
| [`Lang`](./classes/Zemit/Models/Lang.md) | Class Lang|
| [`Log`](./classes/Zemit/Models/Log.md) | Class Log|
| [`Menu`](./classes/Zemit/Models/Menu.md) | Class Menu|
| [`Meta`](./classes/Zemit/Models/Meta.md) | Class Meta|
| [`Oauth2`](./classes/Zemit/Models/Oauth2.md) | Class Oauth2|
| [`Page`](./classes/Zemit/Models/Page.md) | Class Page|
| [`PhalconMigrations`](./classes/Zemit/Models/PhalconMigrations.md) | Class PhalconMigrations|
| [`Post`](./classes/Zemit/Models/Post.md) | Class Post|
| [`PostCategory`](./classes/Zemit/Models/PostCategory.md) | Class PostCategory|
| [`Profile`](./classes/Zemit/Models/Profile.md) | Class Profile|
| [`Role`](./classes/Zemit/Models/Role.md) | Class Role|
| [`RoleFeature`](./classes/Zemit/Models/RoleFeature.md) | Class RoleFeature|
| [`RoleRole`](./classes/Zemit/Models/RoleRole.md) | Class RoleRole|
| [`Session`](./classes/Zemit/Models/Session.md) | Class Session|
| [`Setting`](./classes/Zemit/Models/Setting.md) | Class Setting|
| [`Site`](./classes/Zemit/Models/Site.md) | Class Site|
| [`SiteLang`](./classes/Zemit/Models/SiteLang.md) | Class SiteLang|
| [`Table`](./classes/Zemit/Models/Table.md) | Class Table|
| [`Template`](./classes/Zemit/Models/Template.md) | Class Template|
| [`Translate`](./classes/Zemit/Models/Translate.md) | Class Translate|
| [`TranslateField`](./classes/Zemit/Models/TranslateField.md) | Class TranslateField|
| [`TranslateTable`](./classes/Zemit/Models/TranslateTable.md) | Class TranslateTable|
| [`Type`](./classes/Zemit/Models/Type.md) | Class Type|
| [`User`](./classes/Zemit/Models/User.md) | Class User|
| [`UserFeature`](./classes/Zemit/Models/UserFeature.md) | Class UserFeature|
| [`UserGroup`](./classes/Zemit/Models/UserGroup.md) | Class UserGroup|
| [`UserRole`](./classes/Zemit/Models/UserRole.md) | Class UserRole|
| [`UserType`](./classes/Zemit/Models/UserType.md) | Class UserType|
| [`Validator`](./classes/Zemit/Models/Validator.md) | Class Validator|
| [`Workspace`](./classes/Zemit/Models/Workspace.md) | Class Workspace|
| [`WorkspaceLang`](./classes/Zemit/Models/WorkspaceLang.md) | Class WorkspaceLang|




### \Zemit\Models\Abstracts


| Class | Description |
|-------|-------------|
| [`AuditAbstract`](./classes/Zemit/Models/Abstracts/AuditAbstract.md) | Class AuditAbstract|
| [`AuditDetailAbstract`](./classes/Zemit/Models/Abstracts/AuditDetailAbstract.md) | Class AuditDetailAbstract|
| [`BackupAbstract`](./classes/Zemit/Models/Abstracts/BackupAbstract.md) | Class BackupAbstract|
| [`CategoryAbstract`](./classes/Zemit/Models/Abstracts/CategoryAbstract.md) | Class CategoryAbstract|
| [`DataAbstract`](./classes/Zemit/Models/Abstracts/DataAbstract.md) | Class DataAbstract|
| [`EmailAbstract`](./classes/Zemit/Models/Abstracts/EmailAbstract.md) | Class EmailAbstract|
| [`EmailFileAbstract`](./classes/Zemit/Models/Abstracts/EmailFileAbstract.md) | Class EmailFileAbstract|
| [`FeatureAbstract`](./classes/Zemit/Models/Abstracts/FeatureAbstract.md) | Class FeatureAbstract|
| [`FieldAbstract`](./classes/Zemit/Models/Abstracts/FieldAbstract.md) | Class FieldAbstract|
| [`FileAbstract`](./classes/Zemit/Models/Abstracts/FileAbstract.md) | Class FileAbstract|
| [`FileRelationAbstract`](./classes/Zemit/Models/Abstracts/FileRelationAbstract.md) | Class FileRelationAbstract|
| [`FlagAbstract`](./classes/Zemit/Models/Abstracts/FlagAbstract.md) | Class FlagAbstract|
| [`GroupAbstract`](./classes/Zemit/Models/Abstracts/GroupAbstract.md) | Class GroupAbstract|
| [`GroupFeatureAbstract`](./classes/Zemit/Models/Abstracts/GroupFeatureAbstract.md) | Class GroupFeatureAbstract|
| [`GroupRoleAbstract`](./classes/Zemit/Models/Abstracts/GroupRoleAbstract.md) | Class GroupRoleAbstract|
| [`GroupTypeAbstract`](./classes/Zemit/Models/Abstracts/GroupTypeAbstract.md) | Class GroupTypeAbstract|
| [`JobAbstract`](./classes/Zemit/Models/Abstracts/JobAbstract.md) | Class JobAbstract|
| [`JobSchedulerAbstract`](./classes/Zemit/Models/Abstracts/JobSchedulerAbstract.md) | Class JobSchedulerAbstract|
| [`LangAbstract`](./classes/Zemit/Models/Abstracts/LangAbstract.md) | Class LangAbstract|
| [`LogAbstract`](./classes/Zemit/Models/Abstracts/LogAbstract.md) | Class LogAbstract|
| [`MenuAbstract`](./classes/Zemit/Models/Abstracts/MenuAbstract.md) | Class MenuAbstract|
| [`MetaAbstract`](./classes/Zemit/Models/Abstracts/MetaAbstract.md) | Class MetaAbstract|
| [`Oauth2Abstract`](./classes/Zemit/Models/Abstracts/Oauth2Abstract.md) | Class Oauth2Abstract|
| [`PageAbstract`](./classes/Zemit/Models/Abstracts/PageAbstract.md) | Class PageAbstract|
| [`PhalconMigrationsAbstract`](./classes/Zemit/Models/Abstracts/PhalconMigrationsAbstract.md) | Class PhalconMigrationsAbstract|
| [`PostAbstract`](./classes/Zemit/Models/Abstracts/PostAbstract.md) | Class PostAbstract|
| [`PostCategoryAbstract`](./classes/Zemit/Models/Abstracts/PostCategoryAbstract.md) | Class PostCategoryAbstract|
| [`ProfileAbstract`](./classes/Zemit/Models/Abstracts/ProfileAbstract.md) | Class ProfileAbstract|
| [`RoleAbstract`](./classes/Zemit/Models/Abstracts/RoleAbstract.md) | Class RoleAbstract|
| [`RoleFeatureAbstract`](./classes/Zemit/Models/Abstracts/RoleFeatureAbstract.md) | Class RoleFeatureAbstract|
| [`RoleRoleAbstract`](./classes/Zemit/Models/Abstracts/RoleRoleAbstract.md) | Class RoleRoleAbstract|
| [`SessionAbstract`](./classes/Zemit/Models/Abstracts/SessionAbstract.md) | Class SessionAbstract|
| [`SettingAbstract`](./classes/Zemit/Models/Abstracts/SettingAbstract.md) | Class SettingAbstract|
| [`SiteAbstract`](./classes/Zemit/Models/Abstracts/SiteAbstract.md) | Class SiteAbstract|
| [`SiteLangAbstract`](./classes/Zemit/Models/Abstracts/SiteLangAbstract.md) | Class SiteLangAbstract|
| [`TableAbstract`](./classes/Zemit/Models/Abstracts/TableAbstract.md) | Class TableAbstract|
| [`TemplateAbstract`](./classes/Zemit/Models/Abstracts/TemplateAbstract.md) | Class TemplateAbstract|
| [`TranslateAbstract`](./classes/Zemit/Models/Abstracts/TranslateAbstract.md) | Class TranslateAbstract|
| [`TranslateFieldAbstract`](./classes/Zemit/Models/Abstracts/TranslateFieldAbstract.md) | Class TranslateFieldAbstract|
| [`TranslateTableAbstract`](./classes/Zemit/Models/Abstracts/TranslateTableAbstract.md) | Class TranslateTableAbstract|
| [`TypeAbstract`](./classes/Zemit/Models/Abstracts/TypeAbstract.md) | Class TypeAbstract|
| [`UserAbstract`](./classes/Zemit/Models/Abstracts/UserAbstract.md) | Class UserAbstract|
| [`UserFeatureAbstract`](./classes/Zemit/Models/Abstracts/UserFeatureAbstract.md) | Class UserFeatureAbstract|
| [`UserGroupAbstract`](./classes/Zemit/Models/Abstracts/UserGroupAbstract.md) | Class UserGroupAbstract|
| [`UserRoleAbstract`](./classes/Zemit/Models/Abstracts/UserRoleAbstract.md) | Class UserRoleAbstract|
| [`UserTypeAbstract`](./classes/Zemit/Models/Abstracts/UserTypeAbstract.md) | Class UserTypeAbstract|
| [`ValidatorAbstract`](./classes/Zemit/Models/Abstracts/ValidatorAbstract.md) | Class ValidatorAbstract|
| [`WorkspaceAbstract`](./classes/Zemit/Models/Abstracts/WorkspaceAbstract.md) | Class WorkspaceAbstract|
| [`WorkspaceLangAbstract`](./classes/Zemit/Models/Abstracts/WorkspaceLangAbstract.md) | Class WorkspaceLangAbstract|




### \Zemit\Models\Abstracts\Interfaces





| Interface | Description |
|-----------|-------------|
| [`AuditAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/AuditAbstractInterface.md) | |
| [`AuditDetailAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/AuditDetailAbstractInterface.md) | |
| [`BackupAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/BackupAbstractInterface.md) | |
| [`CategoryAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/CategoryAbstractInterface.md) | |
| [`DataAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/DataAbstractInterface.md) | |
| [`EmailAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/EmailAbstractInterface.md) | |
| [`EmailFileAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/EmailFileAbstractInterface.md) | |
| [`FeatureAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/FeatureAbstractInterface.md) | |
| [`FieldAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/FieldAbstractInterface.md) | |
| [`FileAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/FileAbstractInterface.md) | |
| [`FileRelationAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/FileRelationAbstractInterface.md) | |
| [`FlagAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/FlagAbstractInterface.md) | |
| [`GroupAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/GroupAbstractInterface.md) | |
| [`GroupFeatureAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/GroupFeatureAbstractInterface.md) | |
| [`GroupRoleAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/GroupRoleAbstractInterface.md) | |
| [`GroupTypeAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/GroupTypeAbstractInterface.md) | |
| [`JobAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/JobAbstractInterface.md) | |
| [`JobSchedulerAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/JobSchedulerAbstractInterface.md) | |
| [`LangAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/LangAbstractInterface.md) | |
| [`LogAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/LogAbstractInterface.md) | |
| [`MenuAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/MenuAbstractInterface.md) | |
| [`MetaAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/MetaAbstractInterface.md) | |
| [`Oauth2AbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/Oauth2AbstractInterface.md) | |
| [`PageAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/PageAbstractInterface.md) | |
| [`PhalconMigrationsAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/PhalconMigrationsAbstractInterface.md) | |
| [`PostAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/PostAbstractInterface.md) | |
| [`PostCategoryAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/PostCategoryAbstractInterface.md) | |
| [`ProfileAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/ProfileAbstractInterface.md) | |
| [`RoleAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/RoleAbstractInterface.md) | |
| [`RoleFeatureAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/RoleFeatureAbstractInterface.md) | |
| [`RoleRoleAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/RoleRoleAbstractInterface.md) | |
| [`SessionAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/SessionAbstractInterface.md) | |
| [`SettingAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/SettingAbstractInterface.md) | |
| [`SiteAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/SiteAbstractInterface.md) | |
| [`SiteLangAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/SiteLangAbstractInterface.md) | |
| [`TableAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TableAbstractInterface.md) | |
| [`TemplateAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TemplateAbstractInterface.md) | |
| [`TranslateAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TranslateAbstractInterface.md) | |
| [`TranslateFieldAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TranslateFieldAbstractInterface.md) | |
| [`TranslateTableAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TranslateTableAbstractInterface.md) | |
| [`TypeAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/TypeAbstractInterface.md) | |
| [`UserAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/UserAbstractInterface.md) | |
| [`UserFeatureAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/UserFeatureAbstractInterface.md) | |
| [`UserGroupAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/UserGroupAbstractInterface.md) | |
| [`UserRoleAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/UserRoleAbstractInterface.md) | |
| [`UserTypeAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/UserTypeAbstractInterface.md) | |
| [`ValidatorAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/ValidatorAbstractInterface.md) | |
| [`WorkspaceAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/WorkspaceAbstractInterface.md) | |
| [`WorkspaceLangAbstractInterface`](./classes/Zemit/Models/Abstracts/Interfaces/WorkspaceLangAbstractInterface.md) | |



### \Zemit\Models\Behaviors





| Interface | Description |
|-----------|-------------|
| [`BlameableInterface`](./classes/Zemit/Models/Behaviors/BlameableInterface.md) | |
| [`SoftDeleteInterface`](./classes/Zemit/Models/Behaviors/SoftDeleteInterface.md) | |



### \Zemit\Models\Behaviors\Blameable





| Interface | Description |
|-----------|-------------|
| [`CreatedInterface`](./classes/Zemit/Models/Behaviors/Blameable/CreatedInterface.md) | |
| [`DeletedInterface`](./classes/Zemit/Models/Behaviors/Blameable/DeletedInterface.md) | |
| [`RestoredInterface`](./classes/Zemit/Models/Behaviors/Blameable/RestoredInterface.md) | |
| [`UpdateInterface`](./classes/Zemit/Models/Behaviors/Blameable/UpdateInterface.md) | |



### \Zemit\Models\Interfaces





| Interface | Description |
|-----------|-------------|
| [`AuditDetailInterface`](./classes/Zemit/Models/Interfaces/AuditDetailInterface.md) | |
| [`AuditInterface`](./classes/Zemit/Models/Interfaces/AuditInterface.md) | |
| [`BackupInterface`](./classes/Zemit/Models/Interfaces/BackupInterface.md) | |
| [`CategoryInterface`](./classes/Zemit/Models/Interfaces/CategoryInterface.md) | |
| [`DataInterface`](./classes/Zemit/Models/Interfaces/DataInterface.md) | |
| [`EmailFileInterface`](./classes/Zemit/Models/Interfaces/EmailFileInterface.md) | |
| [`EmailInterface`](./classes/Zemit/Models/Interfaces/EmailInterface.md) | |
| [`FeatureInterface`](./classes/Zemit/Models/Interfaces/FeatureInterface.md) | |
| [`FieldInterface`](./classes/Zemit/Models/Interfaces/FieldInterface.md) | |
| [`FileInterface`](./classes/Zemit/Models/Interfaces/FileInterface.md) | |
| [`FileRelationInterface`](./classes/Zemit/Models/Interfaces/FileRelationInterface.md) | |
| [`FlagInterface`](./classes/Zemit/Models/Interfaces/FlagInterface.md) | |
| [`GroupFeatureInterface`](./classes/Zemit/Models/Interfaces/GroupFeatureInterface.md) | |
| [`GroupInterface`](./classes/Zemit/Models/Interfaces/GroupInterface.md) | |
| [`GroupRoleInterface`](./classes/Zemit/Models/Interfaces/GroupRoleInterface.md) | |
| [`GroupTypeInterface`](./classes/Zemit/Models/Interfaces/GroupTypeInterface.md) | |
| [`JobInterface`](./classes/Zemit/Models/Interfaces/JobInterface.md) | |
| [`JobSchedulerInterface`](./classes/Zemit/Models/Interfaces/JobSchedulerInterface.md) | |
| [`LangInterface`](./classes/Zemit/Models/Interfaces/LangInterface.md) | |
| [`LogInterface`](./classes/Zemit/Models/Interfaces/LogInterface.md) | |
| [`MenuInterface`](./classes/Zemit/Models/Interfaces/MenuInterface.md) | |
| [`MetaInterface`](./classes/Zemit/Models/Interfaces/MetaInterface.md) | |
| [`Oauth2Interface`](./classes/Zemit/Models/Interfaces/Oauth2Interface.md) | |
| [`PageInterface`](./classes/Zemit/Models/Interfaces/PageInterface.md) | |
| [`PhalconMigrationsInterface`](./classes/Zemit/Models/Interfaces/PhalconMigrationsInterface.md) | |
| [`PostCategoryInterface`](./classes/Zemit/Models/Interfaces/PostCategoryInterface.md) | |
| [`PostInterface`](./classes/Zemit/Models/Interfaces/PostInterface.md) | |
| [`ProfileInterface`](./classes/Zemit/Models/Interfaces/ProfileInterface.md) | |
| [`RoleFeatureInterface`](./classes/Zemit/Models/Interfaces/RoleFeatureInterface.md) | |
| [`RoleInterface`](./classes/Zemit/Models/Interfaces/RoleInterface.md) | |
| [`RoleRoleInterface`](./classes/Zemit/Models/Interfaces/RoleRoleInterface.md) | |
| [`SessionInterface`](./classes/Zemit/Models/Interfaces/SessionInterface.md) | |
| [`SettingInterface`](./classes/Zemit/Models/Interfaces/SettingInterface.md) | |
| [`SiteInterface`](./classes/Zemit/Models/Interfaces/SiteInterface.md) | |
| [`SiteLangInterface`](./classes/Zemit/Models/Interfaces/SiteLangInterface.md) | |
| [`TableInterface`](./classes/Zemit/Models/Interfaces/TableInterface.md) | |
| [`TemplateInterface`](./classes/Zemit/Models/Interfaces/TemplateInterface.md) | |
| [`TranslateFieldInterface`](./classes/Zemit/Models/Interfaces/TranslateFieldInterface.md) | |
| [`TranslateInterface`](./classes/Zemit/Models/Interfaces/TranslateInterface.md) | |
| [`TranslateTableInterface`](./classes/Zemit/Models/Interfaces/TranslateTableInterface.md) | |
| [`TypeInterface`](./classes/Zemit/Models/Interfaces/TypeInterface.md) | |
| [`UserFeatureInterface`](./classes/Zemit/Models/Interfaces/UserFeatureInterface.md) | |
| [`UserGroupInterface`](./classes/Zemit/Models/Interfaces/UserGroupInterface.md) | |
| [`UserInterface`](./classes/Zemit/Models/Interfaces/UserInterface.md) | |
| [`UserRoleInterface`](./classes/Zemit/Models/Interfaces/UserRoleInterface.md) | |
| [`UserTypeInterface`](./classes/Zemit/Models/Interfaces/UserTypeInterface.md) | |
| [`ValidatorInterface`](./classes/Zemit/Models/Interfaces/ValidatorInterface.md) | |
| [`WorkspaceInterface`](./classes/Zemit/Models/Interfaces/WorkspaceInterface.md) | |
| [`WorkspaceLangInterface`](./classes/Zemit/Models/Interfaces/WorkspaceLangInterface.md) | |



### \Zemit\Modules\Admin


| Class | Description |
|-------|-------------|
| [`Controller`](./classes/Zemit/Modules/Admin/Controller.md) | Class Controller|
| [`Loader`](./classes/Zemit/Modules/Admin/Loader.md) | |
| [`Module`](./classes/Zemit/Modules/Admin/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|




### \Zemit\Modules\Admin\Controllers


| Class | Description |
|-------|-------------|
| [`AbstractController`](./classes/Zemit/Modules/Admin/Controllers/AbstractController.md) | Class Controller|
| [`ErrorController`](./classes/Zemit/Modules/Admin/Controllers/ErrorController.md) | Class Controller|
| [`IndexController`](./classes/Zemit/Modules/Admin/Controllers/IndexController.md) | Class Controller|




### \Zemit\Modules\Api


| Class | Description |
|-------|-------------|
| [`Controller`](./classes/Zemit/Modules/Api/Controller.md) | Class Controller|
| [`Loader`](./classes/Zemit/Modules/Api/Loader.md) | |
| [`Module`](./classes/Zemit/Modules/Api/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|




### \Zemit\Modules\Api\Controllers


| Class | Description |
|-------|-------------|
| [`AbstractController`](./classes/Zemit/Modules/Api/Controllers/AbstractController.md) | Class Controller|
| [`AuditController`](./classes/Zemit/Modules/Api/Controllers/AuditController.md) | Class Controller|
| [`AuditDetailController`](./classes/Zemit/Modules/Api/Controllers/AuditDetailController.md) | Class Controller|
| [`AuthController`](./classes/Zemit/Modules/Api/Controllers/AuthController.md) | Class Controller|
| [`CategoryController`](./classes/Zemit/Modules/Api/Controllers/CategoryController.md) | Class Controller|
| [`ClamavController`](./classes/Zemit/Modules/Api/Controllers/ClamavController.md) | Class Controller|
| [`DataController`](./classes/Zemit/Modules/Api/Controllers/DataController.md) | Class Controller|
| [`EmailController`](./classes/Zemit/Modules/Api/Controllers/EmailController.md) | Class Controller|
| [`ErrorController`](./classes/Zemit/Modules/Api/Controllers/ErrorController.md) | Class Controller|
| [`FieldController`](./classes/Zemit/Modules/Api/Controllers/FieldController.md) | Class Controller|
| [`FileController`](./classes/Zemit/Modules/Api/Controllers/FileController.md) | Class Controller|
| [`FlagController`](./classes/Zemit/Modules/Api/Controllers/FlagController.md) | Class Controller|
| [`GroupController`](./classes/Zemit/Modules/Api/Controllers/GroupController.md) | Class Controller|
| [`IndexController`](./classes/Zemit/Modules/Api/Controllers/IndexController.md) | Class Controller|
| [`LangController`](./classes/Zemit/Modules/Api/Controllers/LangController.md) | Class Controller|
| [`LogController`](./classes/Zemit/Modules/Api/Controllers/LogController.md) | Class Controller|
| [`MenuController`](./classes/Zemit/Modules/Api/Controllers/MenuController.md) | Class Controller|
| [`MetaController`](./classes/Zemit/Modules/Api/Controllers/MetaController.md) | Class Controller|
| [`PageController`](./classes/Zemit/Modules/Api/Controllers/PageController.md) | Class Controller|
| [`PhalconMigrationsController`](./classes/Zemit/Modules/Api/Controllers/PhalconMigrationsController.md) | Class Controller|
| [`PostController`](./classes/Zemit/Modules/Api/Controllers/PostController.md) | Class Controller|
| [`ProfileController`](./classes/Zemit/Modules/Api/Controllers/ProfileController.md) | Class Controller|
| [`RoleController`](./classes/Zemit/Modules/Api/Controllers/RoleController.md) | Class Controller|
| [`SessionController`](./classes/Zemit/Modules/Api/Controllers/SessionController.md) | Class Controller|
| [`SettingController`](./classes/Zemit/Modules/Api/Controllers/SettingController.md) | Class Controller|
| [`TableController`](./classes/Zemit/Modules/Api/Controllers/TableController.md) | Class Controller|
| [`TemplateController`](./classes/Zemit/Modules/Api/Controllers/TemplateController.md) | Class Controller|
| [`TestController`](./classes/Zemit/Modules/Api/Controllers/TestController.md) | Class Controller|
| [`TranslateController`](./classes/Zemit/Modules/Api/Controllers/TranslateController.md) | Class Controller|
| [`TranslateFieldController`](./classes/Zemit/Modules/Api/Controllers/TranslateFieldController.md) | Class Controller|
| [`TranslateTableController`](./classes/Zemit/Modules/Api/Controllers/TranslateTableController.md) | Class Controller|
| [`TypeController`](./classes/Zemit/Modules/Api/Controllers/TypeController.md) | Class Controller|
| [`UserController`](./classes/Zemit/Modules/Api/Controllers/UserController.md) | Class Controller|
| [`WorkspaceController`](./classes/Zemit/Modules/Api/Controllers/WorkspaceController.md) | Class Controller|




### \Zemit\Modules\Cli


| Class | Description |
|-------|-------------|
| [`Module`](./classes/Zemit/Modules/Cli/Module.md) | |
| [`Task`](./classes/Zemit/Modules/Cli/Task.md) | |




### \Zemit\Modules\Cli\Tasks


| Class | Description |
|-------|-------------|
| [`AbstractTask`](./classes/Zemit/Modules/Cli/Tasks/AbstractTask.md) | |
| [`CacheTask`](./classes/Zemit/Modules/Cli/Tasks/CacheTask.md) | |
| [`CronTask`](./classes/Zemit/Modules/Cli/Tasks/CronTask.md) | |
| [`DataLifeCycleTask`](./classes/Zemit/Modules/Cli/Tasks/DataLifeCycleTask.md) | |
| [`DatabaseTask`](./classes/Zemit/Modules/Cli/Tasks/DatabaseTask.md) | |
| [`ErrorTask`](./classes/Zemit/Modules/Cli/Tasks/ErrorTask.md) | |
| [`HelpTask`](./classes/Zemit/Modules/Cli/Tasks/HelpTask.md) | |
| [`ScaffoldTask`](./classes/Zemit/Modules/Cli/Tasks/ScaffoldTask.md) | |
| [`TestTask`](./classes/Zemit/Modules/Cli/Tasks/TestTask.md) | |
| [`TsScaffoldTask`](./classes/Zemit/Modules/Cli/Tasks/TsScaffoldTask.md) | |
| [`UserTask`](./classes/Zemit/Modules/Cli/Tasks/UserTask.md) | |




### \Zemit\Modules\Cli\Tasks\Traits




| Trait | Description |
|-------|-------------|
| [`DatabaseTrait`](./classes/Zemit/Modules/Cli/Tasks/Traits/DatabaseTrait.md) | |
| [`DescribesTrait`](./classes/Zemit/Modules/Cli/Tasks/Traits/DescribesTrait.md) | Trait DescribesTrait|
| [`ScaffoldTrait`](./classes/Zemit/Modules/Cli/Tasks/Traits/ScaffoldTrait.md) | Trait DescribesTrait|
| [`UserTrait`](./classes/Zemit/Modules/Cli/Tasks/Traits/UserTrait.md) | |




### \Zemit\Modules\Frontend


| Class | Description |
|-------|-------------|
| [`Controller`](./classes/Zemit/Modules/Frontend/Controller.md) | Class Controller|
| [`Module`](./classes/Zemit/Modules/Frontend/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|




### \Zemit\Modules\Frontend\Controllers


| Class | Description |
|-------|-------------|
| [`AbstractController`](./classes/Zemit/Modules/Frontend/Controllers/AbstractController.md) | Class Controller|
| [`CheckController`](./classes/Zemit/Modules/Frontend/Controllers/CheckController.md) | Class Controller|
| [`ErrorController`](./classes/Zemit/Modules/Frontend/Controllers/ErrorController.md) | Class Controller|
| [`IndexController`](./classes/Zemit/Modules/Frontend/Controllers/IndexController.md) | Class Controller|




### \Zemit\Modules\Oauth2


| Class | Description |
|-------|-------------|
| [`Controller`](./classes/Zemit/Modules/Oauth2/Controller.md) | Class Controller|
| [`Module`](./classes/Zemit/Modules/Oauth2/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|




### \Zemit\Modules\Oauth2\Controllers


| Class | Description |
|-------|-------------|
| [`AbstractController`](./classes/Zemit/Modules/Oauth2/Controllers/AbstractController.md) | Class Controller|
| [`ClientController`](./classes/Zemit/Modules/Oauth2/Controllers/ClientController.md) | Class Controller|
| [`FacebookController`](./classes/Zemit/Modules/Oauth2/Controllers/FacebookController.md) | Class Controller|
| [`GithubController`](./classes/Zemit/Modules/Oauth2/Controllers/GithubController.md) | Class Controller|
| [`GoogleController`](./classes/Zemit/Modules/Oauth2/Controllers/GoogleController.md) | Class Controller|
| [`InstagramController`](./classes/Zemit/Modules/Oauth2/Controllers/InstagramController.md) | Class Controller|
| [`LinkedinController`](./classes/Zemit/Modules/Oauth2/Controllers/LinkedinController.md) | Class Controller|




### \Zemit\Mvc


| Class | Description |
|-------|-------------|
| [`Application`](./classes/Zemit/Mvc/Application.md) | Simple HMVC - allow requests with namespaces and modules<br />{@inheritdoc}|
| [`Controller`](./classes/Zemit/Mvc/Controller.md) | Class Controller|
| [`Dispatcher`](./classes/Zemit/Mvc/Dispatcher.md) | {@inheritDoc}|
| [`Model`](./classes/Zemit/Mvc/Model.md) | Events<br />- afterCreate<br />- afterDelete<br />- afterFetch<br />- afterSave<br />- afterUpdate<br />- afterValidation<br />- afterValidationOnCreate<br />- afterValidationOnUpdate<br />- beforeDelete<br />- beforeCreate<br />- beforeSave<br />- beforeUpdate<br />- beforeValidation<br />- beforeValidationOnCreate<br />- beforeValidationOnUpdate<br />- notDeleted<br />- notSaved<br />- onValidationFails<br />- prepareSave<br />- validation|
| [`Module`](./classes/Zemit/Mvc/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Router`](./classes/Zemit/Mvc/Router.md) | {@inheritDoc}|
| [`Url`](./classes/Zemit/Mvc/Url.md) | {@inheritDoc}|
| [`View`](./classes/Zemit/Mvc/View.md) | {@inheritdoc}|




| Interface | Description |
|-----------|-------------|
| [`ModelInterface`](./classes/Zemit/Mvc/ModelInterface.md) | |



### \Zemit\Mvc\Controller


| Class | Description |
|-------|-------------|
| [`Error`](./classes/Zemit/Mvc/Controller/Error.md) | Class Controller|
| [`Rest`](./classes/Zemit/Mvc/Controller/Rest.md) | Class Controller|
| [`Restful`](./classes/Zemit/Mvc/Controller/Restful.md) | Class Controller|




| Interface | Description |
|-----------|-------------|
| [`RestInterface`](./classes/Zemit/Mvc/Controller/RestInterface.md) | |
| [`RestfulInterface`](./classes/Zemit/Mvc/Controller/RestfulInterface.md) | |



### \Zemit\Mvc\Controller\Behavior\Model


| Class | Description |
|-------|-------------|
| [`Create`](./classes/Zemit/Mvc/Controller/Behavior/Model/Create.md) | |
| [`Delete`](./classes/Zemit/Mvc/Controller/Behavior/Model/Delete.md) | |
| [`Restore`](./classes/Zemit/Mvc/Controller/Behavior/Model/Restore.md) | |
| [`Update`](./classes/Zemit/Mvc/Controller/Behavior/Model/Update.md) | |




### \Zemit\Mvc\Controller\Behavior\Skip


| Class | Description |
|-------|-------------|
| [`SkipBind`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipBind.md) | |
| [`SkipBindTypes`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipBindTypes.md) | |
| [`SkipCache`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipCache.md) | |
| [`SkipColumns`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipColumns.md) | |
| [`SkipConditions`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipConditions.md) | |
| [`SkipDistinct`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipDistinct.md) | |
| [`SkipFilterCondition`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipFilterCondition.md) | |
| [`SkipGroup`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipGroup.md) | |
| [`SkipHaving`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipHaving.md) | |
| [`SkipIdentityCondition`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipIdentityCondition.md) | |
| [`SkipJoins`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipJoins.md) | |
| [`SkipLimit`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipLimit.md) | |
| [`SkipOffset`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipOffset.md) | |
| [`SkipOrder`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipOrder.md) | |
| [`SkipPermissionCondition`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipPermissionCondition.md) | |
| [`SkipSearchCondition`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipSearchCondition.md) | |
| [`SkipSoftDeleteCondition`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipSoftDeleteCondition.md) | |
| [`SkipWhiteList`](./classes/Zemit/Mvc/Controller/Behavior/Skip/SkipWhiteList.md) | |




### \Zemit\Mvc\Controller\Traits




| Trait | Description |
|-------|-------------|
| [`Behavior`](./classes/Zemit/Mvc/Controller/Traits/Behavior.md) | |
| [`Debug`](./classes/Zemit/Mvc/Controller/Traits/Debug.md) | |
| [`Export`](./classes/Zemit/Mvc/Controller/Traits/Export.md) | Provides some utility methods to export data|
| [`Expose`](./classes/Zemit/Mvc/Controller/Traits/Expose.md) | |
| [`Fractal`](./classes/Zemit/Mvc/Controller/Traits/Fractal.md) | This trait provides methods for working with Fractal, a library for transforming data structures.|
| [`Model`](./classes/Zemit/Mvc/Controller/Traits/Model.md) | |
| [`Params`](./classes/Zemit/Mvc/Controller/Traits/Params.md) | |
| [`Query`](./classes/Zemit/Mvc/Controller/Traits/Query.md) | Class Query|
| [`RestResponse`](./classes/Zemit/Mvc/Controller/Traits/RestResponse.md) | |
| [`StatusCode`](./classes/Zemit/Mvc/Controller/Traits/StatusCode.md) | Set the status code to the response|




### \Zemit\Mvc\Controller\Traits\Abstracts




| Trait | Description |
|-------|-------------|
| [`AbstractBehavior`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractBehavior.md) | |
| [`AbstractDebug`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractDebug.md) | |
| [`AbstractExport`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractExport.md) | |
| [`AbstractExpose`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractExpose.md) | |
| [`AbstractFractal`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractFractal.md) | |
| [`AbstractInjectable`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractInjectable.md) | Trait AbstractInjectable|
| [`AbstractModel`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractModel.md) | |
| [`AbstractParams`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractParams.md) | |
| [`AbstractQuery`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractQuery.md) | |
| [`AbstractRestResponse`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractRestResponse.md) | |
| [`AbstractStatusCode`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/AbstractStatusCode.md) | |




### \Zemit\Mvc\Controller\Traits\Abstracts\Query




| Trait | Description |
|-------|-------------|
| [`AbstractBind`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractBind.md) | |
| [`AbstractCache`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractCache.md) | |
| [`AbstractColumn`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractColumn.md) | |
| [`AbstractConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractConditions.md) | |
| [`AbstractDistinct`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractDistinct.md) | |
| [`AbstractFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractFields.md) | |
| [`AbstractGroup`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractGroup.md) | |
| [`AbstractHaving`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractHaving.md) | |
| [`AbstractJoins`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractJoins.md) | |
| [`AbstractLimit`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractLimit.md) | The Limit trait provides methods to handle query limits.|
| [`AbstractOffset`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractOffset.md) | This trait provides functionality to set and get an offset value for a query.|
| [`AbstractOrder`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractOrder.md) | |
| [`AbstractSave`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractSave.md) | |
| [`AbstractWith`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/AbstractWith.md) | |




### \Zemit\Mvc\Controller\Traits\Abstracts\Query\Conditions




| Trait | Description |
|-------|-------------|
| [`AbstractFilterConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Conditions/AbstractFilterConditions.md) | |
| [`AbstractIdentityConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Conditions/AbstractIdentityConditions.md) | |
| [`AbstractPermissionConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Conditions/AbstractPermissionConditions.md) | |
| [`AbstractSearchConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Conditions/AbstractSearchConditions.md) | |
| [`AbstractSoftDeleteConditions`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Conditions/AbstractSoftDeleteConditions.md) | |




### \Zemit\Mvc\Controller\Traits\Abstracts\Query\Fields




| Trait | Description |
|-------|-------------|
| [`AbstractExposeFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Fields/AbstractExposeFields.md) | The AbstractExposeFields trait provides a base implementation for exposing fields.|
| [`AbstractFilterFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Fields/AbstractFilterFields.md) | The AbstractFilterFields trait provides a base implementation for filtering fields.|
| [`AbstractMapFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Fields/AbstractMapFields.md) | The AbstractMapFields trait provides a base implementation for mapping fields.|
| [`AbstractSaveFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Fields/AbstractSaveFields.md) | The AbstractSaveFields trait provides a base implementation for saving fields.|
| [`AbstractSearchFields`](./classes/Zemit/Mvc/Controller/Traits/Abstracts/Query/Fields/AbstractSearchFields.md) | The AbstractSearchFields trait provides a base implementation for searching fields.|




### \Zemit\Mvc\Controller\Traits\Actions




| Trait | Description |
|-------|-------------|
| [`AuthActions`](./classes/Zemit/Mvc/Controller/Traits/Actions/AuthActions.md) | |
| [`ClamavActions`](./classes/Zemit/Mvc/Controller/Traits/Actions/ClamavActions.md) | |
| [`ErrorActions`](./classes/Zemit/Mvc/Controller/Traits/Actions/ErrorActions.md) | Default Error Actions|
| [`RestActions`](./classes/Zemit/Mvc/Controller/Traits/Actions/RestActions.md) | |




### \Zemit\Mvc\Controller\Traits\Actions\Rest




| Trait | Description |
|-------|-------------|
| [`AverageAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/AverageAction.md) | |
| [`CountAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/CountAction.md) | |
| [`DeleteAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/DeleteAction.md) | |
| [`DistinctAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/DistinctAction.md) | |
| [`ExportAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/ExportAction.md) | |
| [`FindAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/FindAction.md) | |
| [`FindFirstAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/FindFirstAction.md) | |
| [`IndexAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/IndexAction.md) | |
| [`MaximumAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/MaximumAction.md) | |
| [`MinimumAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/MinimumAction.md) | |
| [`NewAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/NewAction.md) | |
| [`ReorderAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/ReorderAction.md) | |
| [`RestoreAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/RestoreAction.md) | |
| [`SaveAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/SaveAction.md) | |
| [`SumAction`](./classes/Zemit/Mvc/Controller/Traits/Actions/Rest/SumAction.md) | |




### \Zemit\Mvc\Controller\Traits\Interfaces





| Interface | Description |
|-----------|-------------|
| [`BehaviorInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/BehaviorInterface.md) | |
| [`CacheInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/CacheInterface.md) | |
| [`DebugInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/DebugInterface.md) | |
| [`ExportInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/ExportInterface.md) | |
| [`ExposeInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/ExposeInterface.md) | |
| [`FractalInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/FractalInterface.md) | |
| [`ModelInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/ModelInterface.md) | |
| [`ParamsInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/ParamsInterface.md) | |
| [`RestResponseInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/RestResponseInterface.md) | |
| [`StatusCodeInterface`](./classes/Zemit/Mvc/Controller/Traits/Interfaces/StatusCodeInterface.md) | |



### \Zemit\Mvc\Controller\Traits\Query




| Trait | Description |
|-------|-------------|
| [`Bind`](./classes/Zemit/Mvc/Controller/Traits/Query/Bind.md) | |
| [`Cache`](./classes/Zemit/Mvc/Controller/Traits/Query/Cache.md) | This trait provides methods for caching data for the query.|
| [`Column`](./classes/Zemit/Mvc/Controller/Traits/Query/Column.md) | |
| [`Conditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions.md) | |
| [`Distinct`](./classes/Zemit/Mvc/Controller/Traits/Query/Distinct.md) | |
| [`Fields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields.md) | |
| [`Group`](./classes/Zemit/Mvc/Controller/Traits/Query/Group.md) | |
| [`Having`](./classes/Zemit/Mvc/Controller/Traits/Query/Having.md) | |
| [`Joins`](./classes/Zemit/Mvc/Controller/Traits/Query/Joins.md) | |
| [`Limit`](./classes/Zemit/Mvc/Controller/Traits/Query/Limit.md) | The Limit trait provides methods to handle query limits.|
| [`Offset`](./classes/Zemit/Mvc/Controller/Traits/Query/Offset.md) | This trait provides functionality to set and get an offset value for a query.|
| [`Order`](./classes/Zemit/Mvc/Controller/Traits/Query/Order.md) | The Order trait sets and retrieves the order parameter for the query.|
| [`Save`](./classes/Zemit/Mvc/Controller/Traits/Query/Save.md) | |
| [`With`](./classes/Zemit/Mvc/Controller/Traits/Query/With.md) | |




### \Zemit\Mvc\Controller\Traits\Query\Conditions




| Trait | Description |
|-------|-------------|
| [`FilterConditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions/FilterConditions.md) | |
| [`IdentityConditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions/IdentityConditions.md) | |
| [`PermissionConditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions/PermissionConditions.md) | This trait provides methods for managing permission conditions for the query.|
| [`SearchConditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions/SearchConditions.md) | This trait provides methods for managing search conditions.|
| [`SoftDeleteConditions`](./classes/Zemit/Mvc/Controller/Traits/Query/Conditions/SoftDeleteConditions.md) | |




### \Zemit\Mvc\Controller\Traits\Query\Fields




| Trait | Description |
|-------|-------------|
| [`ExposeFields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields/ExposeFields.md) | |
| [`FilterFields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields/FilterFields.md) | |
| [`MapFields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields/MapFields.md) | |
| [`SaveFields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields/SaveFields.md) | |
| [`SearchFields`](./classes/Zemit/Mvc/Controller/Traits/Query/Fields/SearchFields.md) | |




### \Zemit\Mvc\Dispatcher


| Class | Description |
|-------|-------------|
| [`Camelize`](./classes/Zemit/Mvc/Dispatcher/Camelize.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Error`](./classes/Zemit/Mvc/Dispatcher/Error.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Logger`](./classes/Zemit/Mvc/Dispatcher/Logger.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Maintenance`](./classes/Zemit/Mvc/Dispatcher/Maintenance.md) | Maintenance Dispatcher Plugin<br />Redirect to the maintenance module/controller/action|
| [`Module`](./classes/Zemit/Mvc/Dispatcher/Module.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Preflight`](./classes/Zemit/Mvc/Dispatcher/Preflight.md) | Class Preflight|
| [`Rest`](./classes/Zemit/Mvc/Dispatcher/Rest.md) | This class allows to access services in the services container by just only<br />accessing a public property with the same name of a registered service|
| [`Security`](./classes/Zemit/Mvc/Dispatcher/Security.md) | This is the security plugin which controls that users only have access to the modules they're assigned to|




### \Zemit\Mvc\Model


| Class | Description |
|-------|-------------|
| [`Manager`](./classes/Zemit/Mvc/Model/Manager.md) | |




| Interface | Description |
|-----------|-------------|
| [`ManagerInterface`](./classes/Zemit/Mvc/Model/ManagerInterface.md) | |



### \Zemit\Mvc\Model\Behavior


| Class | Description |
|-------|-------------|
| [`Action`](./classes/Zemit/Mvc/Model/Behavior/Action.md) | |
| [`Blameable`](./classes/Zemit/Mvc/Model/Behavior/Blameable.md) | Zemit\Mvc\Model\Traits\Behavior\Blameable|
| [`Conditional`](./classes/Zemit/Mvc/Model/Behavior/Conditional.md) | Zemit\Mvc\Model\Traits\Behavior\Conditional|
| [`Position`](./classes/Zemit/Mvc/Model/Behavior/Position.md) | |
| [`Security`](./classes/Zemit/Mvc/Model/Behavior/Security.md) | The Security class provides methods for access control and permission checking.|
| [`Snapshot`](./classes/Zemit/Mvc/Model/Behavior/Snapshot.md) | |
| [`SoftDelete`](./classes/Zemit/Mvc/Model/Behavior/SoftDelete.md) | {@inheritDoc}|
| [`Transformable`](./classes/Zemit/Mvc/Model/Behavior/Transformable.md) | Zemit\Mvc\Model\Traits\Behavior\Transformable|




### \Zemit\Mvc\Model\Behavior\Traits




| Trait | Description |
|-------|-------------|
| [`ProgressTrait`](./classes/Zemit/Mvc/Model/Behavior/Traits/ProgressTrait.md) | Allow to enable or disable trait<br />on the current model instance ($progress)<br />or globally for every model instance ($staticProgress)|
| [`SkippableTrait`](./classes/Zemit/Mvc/Model/Behavior/Traits/SkippableTrait.md) | Allow to enable or disable trait<br />on the current model instance ($enabled)<br />or globally for every model instance ($staticEnabled)|




### \Zemit\Mvc\Model\EagerLoading


| Class | Description |
|-------|-------------|
| [`EagerLoad`](./classes/Zemit/Mvc/Model/EagerLoading/EagerLoad.md) | Represents a level in the relations tree to be eagerly loaded|
| [`Loader`](./classes/Zemit/Mvc/Model/EagerLoading/Loader.md) | |
| [`QueryBuilder`](./classes/Zemit/Mvc/Model/EagerLoading/QueryBuilder.md) | |




### \Zemit\Mvc\Model\Interfaces





| Interface | Description |
|-----------|-------------|
| [`AttributeInterface`](./classes/Zemit/Mvc/Model/Interfaces/AttributeInterface.md) | |
| [`BehaviorInterface`](./classes/Zemit/Mvc/Model/Interfaces/BehaviorInterface.md) | |
| [`BlameableInterface`](./classes/Zemit/Mvc/Model/Interfaces/BlameableInterface.md) | |
| [`EagerLoadInterface`](./classes/Zemit/Mvc/Model/Interfaces/EagerLoadInterface.md) | |
| [`ExposeInterface`](./classes/Zemit/Mvc/Model/Interfaces/ExposeInterface.md) | |
| [`HashInterface`](./classes/Zemit/Mvc/Model/Interfaces/HashInterface.md) | |
| [`IdentityInterface`](./classes/Zemit/Mvc/Model/Interfaces/IdentityInterface.md) | |
| [`JsonInterface`](./classes/Zemit/Mvc/Model/Interfaces/JsonInterface.md) | |
| [`LocaleInterface`](./classes/Zemit/Mvc/Model/Interfaces/LocaleInterface.md) | |
| [`MetaDataInterface`](./classes/Zemit/Mvc/Model/Interfaces/MetaDataInterface.md) | |
| [`OptionsInterface`](./classes/Zemit/Mvc/Model/Interfaces/OptionsInterface.md) | |
| [`PositionInterface`](./classes/Zemit/Mvc/Model/Interfaces/PositionInterface.md) | |
| [`RelationshipInterface`](./classes/Zemit/Mvc/Model/Interfaces/RelationshipInterface.md) | Interface for model relationship management|
| [`ReplicationInterface`](./classes/Zemit/Mvc/Model/Interfaces/ReplicationInterface.md) | |
| [`SecurityInterface`](./classes/Zemit/Mvc/Model/Interfaces/SecurityInterface.md) | |
| [`SlugInterface`](./classes/Zemit/Mvc/Model/Interfaces/SlugInterface.md) | |
| [`SnapshotInterface`](./classes/Zemit/Mvc/Model/Interfaces/SnapshotInterface.md) | |
| [`SoftDeleteInterface`](./classes/Zemit/Mvc/Model/Interfaces/SoftDeleteInterface.md) | |
| [`ValidateInterface`](./classes/Zemit/Mvc/Model/Interfaces/ValidateInterface.md) | |



### \Zemit\Mvc\Model\Interfaces\Blameable





| Interface | Description |
|-----------|-------------|
| [`BlameAtInterface`](./classes/Zemit/Mvc/Model/Interfaces/Blameable/BlameAtInterface.md) | |
| [`CreatedInterface`](./classes/Zemit/Mvc/Model/Interfaces/Blameable/CreatedInterface.md) | |
| [`DeletedInterface`](./classes/Zemit/Mvc/Model/Interfaces/Blameable/DeletedInterface.md) | |
| [`RestoredInterface`](./classes/Zemit/Mvc/Model/Interfaces/Blameable/RestoredInterface.md) | |
| [`UpdatedInterface`](./classes/Zemit/Mvc/Model/Interfaces/Blameable/UpdatedInterface.md) | |



### \Zemit\Mvc\Model\Traits




| Trait | Description |
|-------|-------------|
| [`Attribute`](./classes/Zemit/Mvc/Model/Traits/Attribute.md) | This trait provides methods to get and set attributes in a model using the get/set methods|
| [`Behavior`](./classes/Zemit/Mvc/Model/Traits/Behavior.md) | Trait Behavior|
| [`Blameable`](./classes/Zemit/Mvc/Model/Traits/Blameable.md) | |
| [`Cache`](./classes/Zemit/Mvc/Model/Traits/Cache.md) | Flush Cache on changes|
| [`EagerLoad`](./classes/Zemit/Mvc/Model/Traits/EagerLoad.md) | |
| [`Events`](./classes/Zemit/Mvc/Model/Traits/Events.md) | |
| [`Expose`](./classes/Zemit/Mvc/Model/Traits/Expose.md) | |
| [`FindIn`](./classes/Zemit/Mvc/Model/Traits/FindIn.md) | |
| [`Hash`](./classes/Zemit/Mvc/Model/Traits/Hash.md) | |
| [`Identity`](./classes/Zemit/Mvc/Model/Traits/Identity.md) | This trait provides convenient methods for managing user identity and authentication within a model.|
| [`Json`](./classes/Zemit/Mvc/Model/Traits/Json.md) | Trait Json|
| [`LifeCycle`](./classes/Zemit/Mvc/Model/Traits/LifeCycle.md) | |
| [`Locale`](./classes/Zemit/Mvc/Model/Traits/Locale.md) | This trait provides functionality to handle localization in models.|
| [`MetaData`](./classes/Zemit/Mvc/Model/Traits/MetaData.md) | The MetaData trait provides methods for retrieving metadata information about a model or entity.|
| [`Options`](./classes/Zemit/Mvc/Model/Traits/Options.md) | The Options trait provides methods for managing options using an options manager.|
| [`Position`](./classes/Zemit/Mvc/Model/Traits/Position.md) | The Position trait is used to manage the position behavior of an object.|
| [`Relationship`](./classes/Zemit/Mvc/Model/Traits/Relationship.md) | Allow to automagically save relationship|
| [`Replication`](./classes/Zemit/Mvc/Model/Traits/Replication.md) | Replica Lag Workaround<br />Prevents Phalcon to use read connection while<br />it might be lagging behind the master db|
| [`Security`](./classes/Zemit/Mvc/Model/Traits/Security.md) | The Security trait provides methods to handle security-related functionalities.|
| [`Slug`](./classes/Zemit/Mvc/Model/Traits/Slug.md) | |
| [`Snapshot`](./classes/Zemit/Mvc/Model/Traits/Snapshot.md) | Trait that provides snapshot functionality for a model.|
| [`SoftDelete`](./classes/Zemit/Mvc/Model/Traits/SoftDelete.md) | This trait provides soft delete functionality to a model class.|
| [`Uuid`](./classes/Zemit/Mvc/Model/Traits/Uuid.md) | |
| [`Validate`](./classes/Zemit/Mvc/Model/Traits/Validate.md) | |




### \Zemit\Mvc\Model\Traits\Abstracts




| Trait | Description |
|-------|-------------|
| [`AbstractBehavior`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractBehavior.md) | |
| [`AbstractBlameable`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractBlameable.md) | |
| [`AbstractEntity`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractEntity.md) | |
| [`AbstractEventsManager`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractEventsManager.md) | |
| [`AbstractIdentity`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractIdentity.md) | |
| [`AbstractInjectable`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractInjectable.md) | |
| [`AbstractLocale`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractLocale.md) | |
| [`AbstractMetaData`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractMetaData.md) | |
| [`AbstractModelsCache`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractModelsCache.md) | |
| [`AbstractModelsManager`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractModelsManager.md) | |
| [`AbstractOptions`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractOptions.md) | |
| [`AbstractSave`](./classes/Zemit/Mvc/Model/Traits/Abstracts/AbstractSave.md) | |




### \Zemit\Mvc\Model\Traits\Blameable




| Trait | Description |
|-------|-------------|
| [`BlameAt`](./classes/Zemit/Mvc/Model/Traits/Blameable/BlameAt.md) | |
| [`Created`](./classes/Zemit/Mvc/Model/Traits/Blameable/Created.md) | |
| [`Deleted`](./classes/Zemit/Mvc/Model/Traits/Blameable/Deleted.md) | |
| [`Restored`](./classes/Zemit/Mvc/Model/Traits/Blameable/Restored.md) | |
| [`Updated`](./classes/Zemit/Mvc/Model/Traits/Blameable/Updated.md) | |




### \Zemit\Mvc\Router


| Class | Description |
|-------|-------------|
| [`ModuleRoute`](./classes/Zemit/Mvc/Router/ModuleRoute.md) | |




### \Zemit\Mvc\View


| Class | Description |
|-------|-------------|
| [`Error`](./classes/Zemit/Mvc/View/Error.md) | |




### \Zemit\Provider


| Class | Description |
|-------|-------------|
| [`AbstractServiceProvider`](./classes/Zemit/Provider/AbstractServiceProvider.md) | Class AbstractServiceProvider|




| Interface | Description |
|-----------|-------------|
| [`ServiceProviderInterface`](./classes/Zemit/Provider/ServiceProviderInterface.md) | Interface ServiceProviderInterface|



### \Zemit\Provider\Acl


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Acl/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Annotations


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Annotations/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Application


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Application/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Assets


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Assets/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Aws


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Aws/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Cache


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Cache/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Clamav


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Clamav/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Config


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Config/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Console


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Console/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Cookies


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Cookies/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Crypt


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Crypt/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Database


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Database/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\DatabaseReadOnly


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/DatabaseReadOnly/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Debug


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Debug/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Dispatcher


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Dispatcher/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Env


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Env/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Escaper


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Escaper/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\EventsManager


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/EventsManager/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\FileSystem


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/FileSystem/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Filter


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Filter/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Flash


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Flash/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Gravatar


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Gravatar/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Helper


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Helper/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Identity


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Identity/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Imap


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Imap/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Jwt


| Class | Description |
|-------|-------------|
| [`Jwt`](./classes/Zemit/Provider/Jwt/Jwt.md) | Issue, parse and validate JSON Web Tokens (JWT) as described in RFC 7519.|
| [`ServiceProvider`](./classes/Zemit/Provider/Jwt/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Locale


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Locale/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Logger


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Logger/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Loggers


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Loggers/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\LoremIpsum


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/LoremIpsum/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Mailer


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Mailer/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Models


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Models/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\ModelsCache


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/ModelsCache/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\ModelsManager


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/ModelsManager/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\ModelsMetadata


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/ModelsMetadata/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\OCR


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/OCR/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Oauth2Client


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Oauth2Client/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Oauth2Facebook


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Oauth2Facebook/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Oauth2Google


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Oauth2Google/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\OpenAi


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/OpenAi/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Profiler


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Profiler/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\ReCaptcha


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/ReCaptcha/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Request


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Request/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Response


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Response/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Router


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Router/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Security


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Security/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Session


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Session/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Tag


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Tag/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Translate


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Translate/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Url


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Url/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Utils


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Utils/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Version


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Version/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\View


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/View/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Provider\Volt


| Class | Description |
|-------|-------------|
| [`ServiceProvider`](./classes/Zemit/Provider/Volt/ServiceProvider.md) | Class AbstractServiceProvider|




### \Zemit\Router





| Interface | Description |
|-----------|-------------|
| [`RouterInterface`](./classes/Zemit/Router/RouterInterface.md) | |



### \Zemit\Support


| Class | Description |
|-------|-------------|
| [`Debug`](./classes/Zemit/Support/Debug.md) | Provides debug capabilities to Zemit applications|
| [`Env`](./classes/Zemit/Support/Env.md) | This class provides utilities for managing environment variables and loading .env files.|
| [`Helper`](./classes/Zemit/Support/Helper.md) | Class Helper|
| [`HelperFactory`](./classes/Zemit/Support/HelperFactory.md) | HelperFactory Class|
| [`Models`](./classes/Zemit/Support/Models.md) | Allow to get mapped classes without using magic methods|
| [`Php`](./classes/Zemit/Support/Php.md) | Class Php|
| [`Slug`](./classes/Zemit/Support/Slug.md) | |
| [`Utils`](./classes/Zemit/Support/Utils.md) | |
| [`Version`](./classes/Zemit/Support/Version.md) | This class allows to get the installed version of the zemit core|



| Trait | Description |
|-------|-------------|
| [`ModelsMap`](./classes/Zemit/Support/ModelsMap.md) | Allow to get mapped classes without using magic methods|




### \Zemit\Support\Exposer


| Class | Description |
|-------|-------------|
| [`Builder`](./classes/Zemit/Support/Exposer/Builder.md) | |
| [`Exposer`](./classes/Zemit/Support/Exposer/Exposer.md) | Class Expose|




| Interface | Description |
|-----------|-------------|
| [`BuilderInterface`](./classes/Zemit/Support/Exposer/BuilderInterface.md) | |



### \Zemit\Support\Helper\Arr


| Class | Description |
|-------|-------------|
| [`FlattenKeys`](./classes/Zemit/Support/Helper/Arr/FlattenKeys.md) | This class provides methods to parse an array into a flatten array with key path separated by a delimiter.|
| [`RecursiveMap`](./classes/Zemit/Support/Helper/Arr/RecursiveMap.md) | Class RecursiveMap|




### \Zemit\Support\Helper\Str


| Class | Description |
|-------|-------------|
| [`Slugify`](./classes/Zemit/Support/Helper/Str/Slugify.md) | Creates a slug to be used for pretty URLs|




### \Zemit\Support\Options


| Class | Description |
|-------|-------------|
| [`Manager`](./classes/Zemit/Support/Options/Manager.md) | |



| Trait | Description |
|-------|-------------|
| [`Options`](./classes/Zemit/Support/Options/Options.md) | The Options trait provides a set of methods for managing options in a class.|




| Interface | Description |
|-----------|-------------|
| [`ManagerInterface`](./classes/Zemit/Support/Options/ManagerInterface.md) | |
| [`OptionsInterface`](./classes/Zemit/Support/Options/OptionsInterface.md) | |



### \Zemit\Translate\Adapter


| Class | Description |
|-------|-------------|
| [`NestedNativeArray`](./classes/Zemit/Translate/Adapter/NestedNativeArray.md) | NestedNativeArray class is an implementation of the Translate Adapter interface that uses<br />a nested array as the translation source.|




***
> Automatically generated on 2024-03-28
