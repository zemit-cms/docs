***

# HelpTask





* Full name: `\Zemit\Modules\Cli\Tasks\HelpTask`
* Parent class: [`\Zemit\Modules\Cli\Task`](../Task.md)



## Properties


### cliDoc



```php
public string $cliDoc
```






***

## Methods


### buildAction

Build Action

```php
public buildAction(): void
```

This method executes the build action by forwarding the request to the build task's help action.









**Throws:**
<p>if there is an error during the forwarding process</p>

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### cronAction

Cron Action

```php
public cronAction(): void
```

This method executes the cron action by forwarding the request to the cron task's help action.









**Throws:**
<p>if there is an error during the forwarding process</p>

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***

### cacheAction

Cache Action

```php
public cacheAction(): void
```

This method executes the cache action by forwarding the request to the cache task's help action.









**Throws:**
<p>if there is an error during the forwarding process</p>

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***


## Inherited methods


### beforeExecuteRoute



```php
public beforeExecuteRoute(): void
```












***

### helpAction



```php
public helpAction(): void
```












***

### mainAction



```php
public mainAction(): ?array
```












***

### normalizeResponse



```php
public normalizeResponse(bool $response = true, ?int $code = null, ?string $status = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$response` | **bool** |  |
| `$code` | **?int** |  |
| `$status` | **?string** |  |





***

### afterExecuteRoute

Handle rest response automagically

```php
public afterExecuteRoute(\Phalcon\Cli\Dispatcher $dispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dispatcher` | **\Phalcon\Cli\Dispatcher** |  |




**Throws:**

- [`CliException`](../../../Exception/CliException.md)



***


***
> Automatically generated on 2024-03-28
