***

# Logger

Responsible for logging database query events.



* Full name: `\Zemit\Db\Events\Logger`
* Parent class: [`\Zemit\Di\Injectable`](../../Di/Injectable.md)



## Properties


### inProgress



```php
public bool $inProgress
```






***

## Methods


### beforeQuery

Executes before a database query is executed.

```php
public beforeQuery(\Phalcon\Events\EventInterface $event, \Phalcon\Db\Adapter\AbstractAdapter $connection): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$event` | **\Phalcon\Events\EventInterface** | The event object. |
| `$connection` | **\Phalcon\Db\Adapter\AbstractAdapter** | The database connection object. |




**Throws:**
<p>If an error occurs while logging.</p>

- [`\Phalcon\Logger\Exception|\Exception`](https://docs.phalcon.io/latest/api/){:target="_blank"}



***


***
