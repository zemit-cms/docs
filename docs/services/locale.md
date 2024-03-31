# Locale Service

## Configurations

### Locale Configurations

```ini
LOCALE_DEFAULT=en
LOCALE_ALLOWED=en,fr
LOCALE_SESSION_KEY=zemit-locale
LOCALE_MODE=default
```

### Locale Service Provider

```ini
PROVIDER_LOCALE=\Zemit\Provider\Locale\ServiceProvider
```

### Locale Configurations Object

```php
<?php
new Config([
    'providers' => [
        \Zemit\Provider\Locale\ServiceProvider::class => Env::get('PROVIDER_LOCALE', \Zemit\Provider\Locale\ServiceProvider::class),
    ],
    'locale' => [
        'default' => Env::get('LOCALE_DEFAULT', 'en'),
        'allowed' => explode(',', Env::get('LOCALE_ALLOWED', 'en')),
        'sessionKey' => Env::get('LOCALE_SESSION_KEY', 'zemit-locale'),
        'mode' => Env::get('LOCALE_MODE', Locale::MODE_DEFAULT),
    ],
]);
```

## Locale Service (`locale`)

!!! info "Locale Service Provider"
    Locale Service Provider (`locale`):
    [`\Zemit\Provider\Locale\ServiceProvider`](https://github.com/zemit-cms/core/blob/master/src/Provider/Locale/ServiceProvider.php){:target="_blank"}

```php
<?php
// Retrieving the service from an Injectable
$locale = $this->locale;

// Retrieving the service from the DI
$locale = $this->di->get('locale');

// Retrieving the service from the getDI()
$locale = $this->getDI()->get('locale');

// Retrieving the service from anywhere
$locale = Di::getDefault()->get('locale');
```
