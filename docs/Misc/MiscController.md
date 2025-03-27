***

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](MapDetails.md)>

Gets the details of the map.

### Returns

`Promise`\<[`MapDetails`](MapDetails.md)>

### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```
