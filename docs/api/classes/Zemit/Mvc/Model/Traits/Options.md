***

# Options

The Options trait provides methods for managing options using an options manager.



* Full name: `\Zemit\Mvc\Model\Traits\Options`



## Properties


### optionsManager



```php
public \Zemit\Support\Options\ManagerInterface $optionsManager
```






***

## Methods


### initializeOptions

Initialize the Options Manager for the current instance

```php
public initializeOptions(): void
```












***

### getOptionsManager

Get the Options Manager for the current instance

```php
public getOptionsManager(): \Zemit\Support\Options\ManagerInterface
```









**Return Value:**

The Options Manager for the current instance




***

### setOptionsManager

Sets the options manager.

```php
public setOptionsManager(\Zemit\Support\Options\ManagerInterface $optionsManager): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$optionsManager` | **\Zemit\Support\Options\ManagerInterface** | The options manager to be set. |





***

***
> Automatically generated on 2024-03-28

