---
"@feltmaps/js-sdk": patch
---

Fix `Felt.connect` intermittently failing in Safari with `DataCloneError` by creating a fresh `MessageChannel` for each handshake attempt instead of re-transferring the same port
