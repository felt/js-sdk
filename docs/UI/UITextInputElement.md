***

Represents a text input element in a panel.

# Remarks

`value` property is required, for empty value use `""`.
`label` property is displayed above the input and used for screen readers.

# Examples

```typescript
{
  type: "TextInput",
  value: "",
  onChange: (args) => console.log(args.value),
  placeholder: "Enter your name",
}
```

```typescript
{
  type: "TextInput",
  label: "Name",
  value: "Hello",
  onChange: (args) => console.log(args.value),
  placeholder: "Enter your name",
}

# Properties

## type

> **type**: `"TextInput"`

***

## value

> **value**: `string`

The value of the input. Use `""` for empty values.

***

## id

> **id**: `string`

The ID of the element.

***

## placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

***

## onChange()?

> `optional` **onChange**: (`args`: \{ `value`: `string`; \}) => `void`

The function to call when the value of the input changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `value`: `string`; \} |
| `args.value` | `string` |

### Returns

`void`

***

## onBlur()?

> `optional` **onBlur**: (`args`: \{ `value`: `string`; \}) => `void`

The function to call when the input is blurred.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `value`: `string`; \} |
| `args.value` | `string` |

### Returns

`void`

***

## onFocus()?

> `optional` **onFocus**: (`args`: \{ `value`: `string`; \}) => `void`

The function to call when the input is focused.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `value`: `string`; \} |
| `args.value` | `string` |

### Returns

`void`

***

## onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

### Returns

`void`

***

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
```
