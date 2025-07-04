***

An option to display in a control element.

Control elements are elements that allow the user to select one or more values from a list of options.
This includes:

* [UIRadioGroupElement](UIRadioGroupElement.md)
* [UICheckboxGroupElement](UICheckboxGroupElement.md)
* [UIToggleGroupElement](UIToggleGroupElement.md)
* [UISelectElement](UISelectElement.md)

The option can be disabled by setting the `disabled` property to `true`.

# Examples

```typescript
{ label: "Option A", value: "optionA" }
```

A disabled option

```typescript
{ label: "Option A", value: "optionA", disabled: true }
```

# Properties

## label

> **label**: `string`

***

## value

> **value**: `string`

***

## disabled?

> `optional` **disabled**: `boolean`
