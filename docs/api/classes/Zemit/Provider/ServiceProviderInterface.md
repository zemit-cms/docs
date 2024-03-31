***

# ServiceProviderInterface

Interface ServiceProviderInterface



* Full name: `\Zemit\Provider\ServiceProviderInterface`
* Parent interfaces: [`ServiceProviderInterface`](https://docs.phalcon.io/latest/api/){:target="_blank"}, [`InjectionAwareInterface`](https://docs.phalcon.io/latest/api/){:target="_blank"}


## Methods


### register

Register application service.

```php
public register(\Phalcon\Di\DiInterface $di): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$di` | **\Phalcon\Di\DiInterface** |  |





***

### boot

Package boot method.

```php
public boot(): void
```












***

### configure

Configures the current service provider.

```php
public configure(): void
```












***

### getName

Get the Service name.

```php
public getName(): string
```












***


***
> Automatically generated on 2024-03-28
