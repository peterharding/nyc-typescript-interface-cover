## README

For: https://github.com/istanbuljs/nyc/issues/570

Problem: Version `10.3.2` of `nyc` considers `typescript` interface files when calculating coverage.

This repo demonstrates the difference in how `nyc` treats `typescript` interfaces between versions `10.1.2` and `10.3.2`.

### `10.1.2`

- `cd 10.1.2`
- `npm install`
- `npm run cover`
- See `File [/Users/.../nyc-typescript-interface-cover/10.1.2/src/Fish.ts] ignored, nothing could be mapped` warning
- See `100%` coverage

### `10.3.2`

- `cd 10.3.2`
- `npm install`
- `npm run cover`
- Do *NOT* see `File [/Users/.../nyc-typescript-interface-cover/10.1.2/src/Fish.ts] ignored, nothing could be mapped` warning
- See less than `100%` coverage

---

I think there is "nothing to test" for an interface file, so even though the warnings in version `10.1.2` were annoying, it made sense that the interface files were ignored.

Now with version `10.3.2`, the warnings are gone because the interface files are counted towards lines covered. This is incorrect in my opinion, so the point of opening this issue is to determine if this change was intentional.
