***

Represents a select element in a panel.

# Remarks

`options` property is required.
`label` property is displayed above the select and used for screen readers.
`value` property is optional, for empty value use `undefined`.
`placeholder` property is displayed in the select when no value is selected.
`search` property is used to enable searching through the options.
`onChange` property is used to handle the value change event.

# Examples

### empty select

```typescript
{
  type: "Select",
  options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
  value: undefined,
  placeholder: "Select an option",
  onChange: (args) => console.log(args.value),
}
```

### with search

```typescript
{
  type: "Select",
  options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
  value: "option1",
  placeholder: "Select an option",
  search: true,
  onChange: (args) => console.log(args.value),
}
```

# Properties

## type

> **type**: `"Select"`

***

## options

> **options**: \{ `label`: `string`; `value`: `string`; }\[]

The options to display in the select.

| Name    | Type     |
| ------- | -------- |
| `label` | `string` |
| `value` | `string` |

***

## onChange()

> **onChange**: (`args`: \{ `value`: `string`; `id`: `string`; }) => `void`

The function to call when the value of the select changes.

### Parameters

| Parameter    | Type                                    | Description                           |
| ------------ | --------------------------------------- | ------------------------------------- |
| `args`       | \{ `value`: `string`; `id`: `string`; } | The arguments passed to the function. |
| `args.value` | `string`                                | The value of the select.              |
| `args.id`    | `string`                                | The id of the select element.         |

### Returns

`void`

***

## id

> **id**: `string`

The ID of the element.

***

## value?

> `optional` **value**: `string`

The value of the select.

***

## placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the select.

***

## search?

> `optional` **search**: `boolean`

Whether the select should allow searching through the options.

### Default Value

`false`

***

## onCreate()?

> `optional` **onCreate**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`

***

## label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.
