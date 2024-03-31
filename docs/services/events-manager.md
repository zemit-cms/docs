# Events Manager Service

## Configuration



### Changing the Events Manager Service Provider

```ini
PROVIDER_EVENTS=\Zemit\Provider\EventsManager\ServiceProvider
```

## Events Manager Service (`eventsManager`)

!!! info "Events Service Provider"
    Events Service Provider (`eventsManager`):
    [`\Zemit\Provider\Events\ServiceProvider`](https://github.com/zemit-cms/core/blob/master/src/Provider/EventsManager/ServiceProvider.php){:target="_blank"}

```php
<?php
// Retrieving the service from an Injectable
$events = $this->eventsManager;

// Retrieving the service from the DI
$events = $this->di->get('eventsManager');

// Retrieving the service from the getDI()
$events = $this->getDI()->get('eventsManager');

// Retrieving the service from anywhere
$events = Di::getDefault()->get('eventsManager');
```
