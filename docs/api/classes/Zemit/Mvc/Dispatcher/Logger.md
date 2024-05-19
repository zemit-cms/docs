***

# Logger

This class allows to access services in the services container by just only
accessing a public property with the same name of a registered service



* Full name: `\Zemit\Mvc\Dispatcher\Logger`
* Parent class: [`\Zemit\Di\Injectable`](../../Di/Injectable.md)




## Methods


### isEnabled

Check if the logger is currently enabled or not from the config

```php
public isEnabled(): bool
```












***

### beforeDispatchLoop

This action is executed before execute any action in the application
Keeping a log of the dispatch event

```php
public beforeDispatchLoop(\Phalcon\Events\Event $event, \Zemit\Dispatcher\DispatcherInterface $dispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$event` | **\Phalcon\Events\Event** |  |
| `$dispatcher` | **\Zemit\Dispatcher\DispatcherInterface** |  |




**Throws:**

- [`Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***


***
