---
"@feltmaps/js-sdk": minor
---

Add a Collaboration controller so extensions can build multiplayer experiences between viewers running the same extension on the same map:

- `broadcast` / `onBroadcast` — send and receive ephemeral, peers-only broadcast messages.
- `setBroadcastState` / `onBroadcastStateChange` — publish per-peer shared state that late joiners inherit automatically.
