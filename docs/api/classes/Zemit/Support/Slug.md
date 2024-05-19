***

# Slug





* Full name: `\Zemit\Support\Slug`




## Methods


### generate

Creates a slug to be used for pretty URLs

```php
public static generate(string $string, array $replace = [], string $delimiter = '-'): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$string` | **string** |  |
| `$replace` | **array** |  |
| `$delimiter` | **string** |  |





***

### restoreLocale

Restore the locale settings based on the provided old locale.

```php
private static restoreLocale(string|string[] $oldLocale): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$oldLocale` | **string|string[]** | The old locale settings.<br />Can be either a string or an array of locale settings.<br />If a string, it will be parsed and converted to an array of locale settings. |





***

### cleanString

Replace non-letter or non-digits by -
Trim trailing -

```php
public static cleanString(string $string, string $delimiter): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$string` | **string** |  |
| `$delimiter` | **string** |  |





***


***
