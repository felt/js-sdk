***

The Misc controller provides access to miscellaneous map functionality
that doesn't fit into other controller categories.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](MapDetails.md)>

Gets the details of the map.

Use this method to retrieve metadata about the current map, such as
its title, description, and other map-level information.

### Returns

`Promise`\<[`MapDetails`](MapDetails.md)>

A promise that resolves to the map details.

### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```
