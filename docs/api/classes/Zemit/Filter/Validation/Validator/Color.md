***

# Color





* Full name: `\Zemit\Filter\Validation\Validator\Color`
* Parent class: [`AbstractValidator`](https://docs.phalcon.io/latest/api/){:target="_blank"}
* This class implements:
[`\Phalcon\Filter\Validation\ValidatorInterface`](https://docs.phalcon.io/latest/api/){:target="_blank"}



## Properties


### template



```php
protected $template
```






***

## Methods


### __construct



```php
public __construct(array $options = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$options` | **array** | = [<br />    'message' => '',<br />    'template' => '',<br />    'allowEmpty' => false<br />] |





***

### validate



```php
public validate(\Phalcon\Filter\Validation $validation, mixed $field): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$validation` | **\Phalcon\Filter\Validation** |  |
| `$field` | **mixed** |  |





***

### isValidColor

Check if a given color is in a valid hexadecimal format.

```php
private isValidColor(string $color): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$color` | **string** |  |





***


***
> Automatically generated on 2024-03-28
