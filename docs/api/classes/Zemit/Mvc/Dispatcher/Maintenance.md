***

# Maintenance

Maintenance Dispatcher Plugin
Redirect to the maintenance module/controller/action



* Full name: `\Zemit\Mvc\Dispatcher\Maintenance`
* Parent class: [`\Zemit\Di\Injectable`](../../Di/Injectable.md)


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`DEFAULT_MAINTENANCE_MODULE`|public| |null|
|`DEFAULT_MAINTENANCE_CONTROLLER`|public| |'error'|
|`DEFAULT_MAINTENANCE_ACTION`|public| |'maintenance'|


## Methods


### beforeDispatch

Executed before dispatching a request.

```php
public beforeDispatch(\Phalcon\Events\Event $event, \Phalcon\Dispatcher\AbstractDispatcher $dispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$event` | **\Phalcon\Events\Event** | The event object. |
| `$dispatcher` | **\Phalcon\Dispatcher\AbstractDispatcher** | The dispatcher object. |




**Throws:**
<p>If an error happened during the dispatch forwarding to the maintenance route</p>

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***


***
